//Suppression des images : FileSystem
const fs = require('fs');
//Sequelize = récupérer tous les modèles:
const db = require("../models")
const Poste = db.poste;
const User = db.utilisateur;
const Commentaire = db.commentaire;
const Coeur = db.coeur;

//fonction qui permet de reformater le poste avec le nbre de like au lieu d'un tableau
function reformat_post_with_heart(post){
    //affiche le nbre de like
    let nb_coeur = post.coeurs.length;
    //reformate le poste avec le nbre de like
    let post_send = {
        poste_id:post.poste_id,
        poste_image:post.poste_image,
        description:post.description,
        utilisateur_id:post.utilisateur_id,
        coeur:nb_coeur,
        commentaires:post.commentaires
    };
    //on retourne du coup le poste reformaté
    return post_send;
}

//Crée un poste
exports.postArticle = (req, res, next) => {

    User.findOne({ where: { utilisateur_id: req.auth.userId } }).then((user) => {
        if(req.file === undefined){
            var poste = {
                description: req.body.description,
                utilisateur_id: user.utilisateur_id,
                date_creation: Date.now()
            }
        }else{
            var poste = {
                poste_image:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
                description: req.body.description,
                utilisateur_id: user.utilisateur_id,
                date_creation: Date.now()
            }
        }
        Poste.create(poste).then(data =>{

            res.send(data)

        }).catch(err => {

            res.status(500).json({err})

        });
    })
    .catch(error => res.status(500).json({error}));
   

};

//Récupère tous les postes, les coeurs reformatés et les commentaires avec les utilisateurs de chaque comm
exports.getAll = (req, res, next) => {

    Poste.findAll({order: [['date_creation', 'DESC']], include : [{model: Coeur, as: "coeurs" },
    {model: Commentaire, as: "commentaires", order: [['date_creation','DESC']], include: [{model: User, as: "utilisateur" }]}]})
    .then(posts => {
        //count pour chaque poste.coeurs et retourner le nombre de coeurs
        all_post_reformat = [] //crée un tableau qui contiendra tous les postes
        //on boucle sur tous les postes du findAll
        for(let post of posts){
            all_post_reformat.push(reformat_post_with_heart(post))
        }
         res.status(200).json(all_post_reformat); 
    })
    .catch(error => res.status(500).json({ error, message: error.message }));
   
};

//Récupère un poste
exports.getOne = (req, res, next) => {
    Poste.findOne({ where : {poste_id : req.params.id} , include : [{model: Coeur, as: "coeurs" },
    {model: Commentaire, as: "commentaires", order: [['date_creation','DESC']], include: [{model: User, as: "utilisateur" }]}]})
    .then(post => { 
        post_send = reformat_post_with_heart(post)
        res.status(200).json(post_send); 
    })
    .catch(error => res.status(500).json({ error, message: error.message }));
};

//Suppression d'un poste
exports.delete = (req, res, next) => {
    
    Poste.findOne({ where : { poste_id: req.params.id}}).then((poste)=>{

        if(req.auth.userId == poste.utilisateur_id || req.auth.admin){
            //suppression du poste
            Poste.destroy({ where: {poste_id: poste.poste_id}})
                .then(() => {
                    if(poste.poste_image != ""){
                        var allPath =  poste.poste_image
                        //on veut le dernier élément
                        var filename = allPath.split("/")[allPath.split("/").length - 1]
                        fs.unlink(`./images/${filename}`,()=>{})
                    }
                    res.status(201).json({message: "Poste Supprimé !"})
                })
                .catch(err => res.status(500).json({err, message: err.message}));

        }else{
            res.status(401).json({error: "Vous ne pouvez supprimer l\'utilisateur"})
        }
    }).catch(error => res.status(500).json({error:"Poste introuvable"}));

   
};

//MAJ d'un poste
exports.update = (req, res, next) => {
    
    if(req.auth.userId != req.params.id && !req.auth.admin){
        res.status(401).json({error: "Vous ne pouvez modifier l\'utilisateur"})
    }else{
        Poste.findOne({ where : { poste_id: req.params.id}})
        .then(poste =>{
            
            var deletedOldFile = false;
            if(poste.poste_image == "" && req.file === undefined){
                var newPoste = {
                    description: req.body.description,
                    utilisateur_id: poste.utilisateur_id,
                    date_creation: poste.date_creation
                }
            }else if(poste.poste_image != "" && req.file === undefined){
                var newPoste = {
                    description: req.body.description,
                    utilisateur_id: poste.utilisateur_id,
                    poste_image: poste.poste_image,
                    date_creation: poste.date_creation
                }
            }else{
                var newPoste = {
                    description: req.body.description,
                    utilisateur_id: poste.utilisateur_id,
                    poste_image:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
                    date_creation: poste.date_creation
                }
                deletedOldFile= true;
            }

            Poste.update(newPoste , { where: {utilisateur_id : req.params.id}}).then(data =>{
                    
                if(deletedOldFile){
                    var allPath =  poste.poste_image
                    var filename = allPath.split("/")[allPath.split("/").length - 1]
                    fs.unlink(`./images/${filename}`,()=>{})
                }

                res.send(data)
        
            }).catch(err => {
            
                res.status(500).json({err})
            
            });
        })
        .catch(error => res.status(500).json({error}));
    }
};