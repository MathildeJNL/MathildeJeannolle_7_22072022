//Sequelize = récupérer tous les modèles:
const db = require("../models")
const Poste = db.poste;
const Commentaire = db.commentaire;


exports.sendCommentaire = (req, res, next) => {
    //select le poste avec le poste_id en paramètres (api/commentaire/:postId)
    Poste.findOne({ where: { poste_id: req.params.postId } }).then((poste) => {
    
        //on crée l'objet commentaire où on recup l'id du poste et l'user id via le token
        var commentaire = {
            texte_commentaire:req.body.texte_commentaire,
            date_creation: Date.now(),
            poste_id:poste.poste_id,
            //on récupère l'info du token
            utilisateur_id: req.auth.userId,
        }
        //on crée le commentaire
        Commentaire.create(commentaire).then(data =>{

            res.send(data)
    
        }).catch(err => {
    
            res.status(500).json({error:err.message})
    
        });

    }).catch(err => {res.status(500).json({error:err.message})})

    
};

//suppression du commentaire
exports.deleteCommentaire = (req, res, next) => {
   //select le commentaire avec l'id du comm en paramètres
    Commentaire.findOne({ where : { commentaires_id: req.params.id}}).then((commentaire)=>{
        
        //si l'userId est = à l'utilisateurId qui a fait le comm ou que c'est l'admin
        if(req.auth.userId == commentaire.utilisateur_id || req.auth.admin){
            // suppression du commentaire
            Commentaire.destroy({ where: {commentaires_id: commentaire.commentaires_id}})
                .then(() => res.status(201).json({message: "Commentaire Supprimé !"}))
                .catch(err => res.status(500).json({err, error: err.message}));
        //si il n'a pas les droits on renvoie un message d'erreur
        }else{
            res.status(401).json({error: "Vous ne pouvez supprimer le commentaire"})
        }
    }).catch(error => res.status(500).json({error:"Commentaire introuvable"}));

};