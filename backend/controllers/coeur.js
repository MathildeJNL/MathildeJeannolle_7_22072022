//Sequelize = récupérer tous les modèles:
const db = require("../models")
const Poste = db.poste;
const User = db.utilisateur;
const Coeur = db.coeur;

//like
exports.like = (req, res, next) => {
    //select le poste avec le poste_id en paramètres (api/poste/:postId)
    Poste.findOne({ where: { poste_id: req.params.postId } }).then((poste) => {
        //si le like = 1 on met une donnée dans la table coeur
        if(req.body.like == 1){
            //on crée l'objet coeur où on recup l'id du poste et l'user id via le token
            var newCoeur = {
                poste_id:poste.poste_id,
                utilisateur_id: req.auth.userId
            }
            //on vérifie que le coeur n'existe pas pour l'user et le poste en question
            Coeur.findOne({ where: { poste_id: poste.poste_id, utilisateur_id: req.auth.userId } })
                .then((coeur) => {
                    //si le coeur est = null on crée le coeur
                    if(coeur == null){
                        console.log("création coeur")
                        Coeur.create(newCoeur)
                            .then(data =>{res.status(201).json({message: "Liked"})})
                            .catch(err => {res.status(500).json({error:"Une erreur s\'est produite"})});
                    //le coeur n'est pas = null donc on renvoie le message d'erreur
                    }else{
                        res.status(500).json({error: "Vous ne pouvez ajouter un like à nouveau!"})
                    }

                })
                .catch(err => res.status(500).json({err, message: err.message}));
        //si on dislike, on supprime le coeur en question sur le poste et le user en question
        }else{
            Coeur.destroy({ where: {utilisateur_id: req.auth.userId, poste_id: poste.poste_id} })
                .then(() => res.status(201).json({message: "Disliked"}))
                .catch(err => res.status(500).json({err, message: err.message}));
        
        }
    }).catch(err => {res.status(500).json({error:"Une erreur s\'est produite"})})
    
};
