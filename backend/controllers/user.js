//crypte les informations
const bcrypt = require('bcrypt');
//permet de créer les tokens et de les vérifier
const jwt = require('jsonwebtoken');
//cryptage SQL du password de l'admin
const md5 = require('md5');
const fs = require('fs');

const db = require("../models")
const User = db.utilisateur;

//enregistrement de nvx users
exports.signup = (req, res, next) => {
    // vérifier si il y a une image
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        if(req.file === undefined){
            var user = {
                nom: req.body.nom,
                prenom:req.body.prenom,
                age:req.body.age,
                mail:req.body.mail,
                password:hash,
                profil_image:`${req.protocol}://${req.get('host')}/images/default_icon.png`,
                poste_occupe:req.body.poste_occupe,
                admin:false
            };
        }else{
            var user = {
                nom: req.body.nom,
                prenom:req.body.prenom,
                age:req.body.age,
                mail:req.body.mail,
                password:hash,
                profil_image:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
                poste_occupe:req.body.poste_occupe,
                admin:false
            };
        }
        User.create(user).then(data =>{

            res.send(data)

        }).catch(err => {

            res.status(500).json({err})

        });
    })
    .catch(error => res.status(500).json({error: error.message}));
};

// suppression utilisateur
exports.deleteUser = (req,res,next) =>{

    User.findOne({ where : { utilisateur_id: req.params.id}}).then((user)=>{

        if(req.auth.userId == user.utilisateur_id || req.auth.admin){

            User.destroy({ where: {utilisateur_id: user.utilisateur_id}})
                .then(() => {
                    if(user.profil_image != "" && user.profil_image != null && user.profil_image != undefined){
                        var filename = user.profil_image
                        if(filename != "default_icon.png"){
                            fs.unlink(`images/${filename}`,()=>{
                                res.status(201).json({message: "Utilisateur Supprimé !"})
                            })
                        }
                    }else{
                        res.status(201).json({message: "Utilisateur Supprimé !"})
                    }
                    
                })
                .catch(err => res.status(500).json({error: err.message}));
        
        }else{
            res.status(401).json({error: "Vous ne pouvez supprimer l\'utilisateur"})
        }
    }).catch(error => res.status(500).json({error:"Utilisateur introuvable"}));

}

//fonction login pour connecter user existant
exports.login = (req, res, next) => {
    //vérification de l'email si déjà existant
    User.findOne({ where : { mail: req.body.email}})
    .then(user => {
        //si l'utilisateur est inexistant, on affiche une erreur
        if (user === null) {
            //pour toute confidentialité, on indique un message qui ne donne pas de grosse précision sur l'objet de l'erreur
            res.status(401).json({message: 'Identifiant ou mot de passe incorrect'});
        } else {
            // gestion si administrateur
            if(req.body.email == "admin@admin.com"){
                if(md5(req.body.password) == user.password){
                    res.status(200).json({
                        userId: user.utilisateur_id,
                        admin: user.admin,
                        token: jwt.sign( 
                            {userId: user.utilisateur_id,admin:user.admin},
                            //clé secrète encodée
                            'RANDOM_TOKEN_SECRET',
                            {expiresIn: '24h'}
                        )
                    });
                }else{
                    res.status(401).json({message: 'Identifiant ou mot de passe incorrect'});
                }
            }else{
                bcrypt.compare(req.body.password, user.password) //on compare les entrées et les données
                .then(valid => {
                    if (!valid){
                        res.status(401).json({message: 'Identifiant ou mot de passe incorrect'});
                    } else {
                        res.status(200).json({
                            userId: user.utilisateur_id,
                            admin: user.admin,
                            token: jwt.sign( 
                                {userId: user.utilisateur_id,admin:user.admin},
                                //clé secrète encodée
                                'RANDOM_TOKEN_SECRET',
                                {expiresIn: '24h'}
                            )
                        });
                    }
                })
                .catch(error => res.status(500).json({error : error.message}));
            }
        }
    })
    .catch(error => res.status(500).json({error: error.message}));
};

exports.updatePassword = (req, res, next) => {
    if(req.auth.userId != req.params.id && !req.auth.admin){
        res.status(401).json({error: "Vous ne pouvez modifier l\'utilisateur"})
    }else{
        User.findOne({ where : { utilisateur_id: req.auth.userId}})
        .then(user =>{
            bcrypt.hash(req.body.password, 10)
            .then(hash => {
                var newUser = {
                    nom: user.nom,
                    prenom:user.prenom,
                    //SQL a besoin du format : YYYY-MM-DD
                    //JS met ce format : YYYY-MM-DDTHH:MM:SSZ
                    //donc on split au T car on ne veut que la date 
                    age:new Date(user.age).toISOString().split("T")[0],
                    mail:user.mail,
                    password:hash,
                    profil_image:user.profil_image,
                    poste_occupe:user.poste_occupe,
                    admin:user.admin
                }
                User.update(newUser , { where: {utilisateur_id : req.auth.userId}}).then(data =>{
                    
                    res.status(201).json({message:"Utilisateur modifié"})
        
                }).catch(err => {
        
                     res.status(500).json({error : err.mesage})
        
                });
            })
            .catch(error => res.status(500).json({error:error.message}));
        })
        .catch(error => res.status(500).json({error:error.message}))
    }
   

};

exports.update = (req, res, next) => {
    if(req.auth.userId != req.params.id && !req.auth.admin){
        res.status(401).json({error: "Vous ne pouvez modifier l\'utilisateur"})
    }else{
        User.findOne({ where : { utilisateur_id: req.auth.userId}})
        .then(user =>{
            var deletedOldFile = false;
            if(user.profil_image == "" && req.file === undefined){
                var newUser = {
                    nom: req.body.nom,
                    prenom:req.body.prenom,
                    age:new Date(user.age).toISOString().split("T")[0],
                    mail:user.mail,
                    password:user.password,
                    poste_occupe:req.body.poste_occupe,
                    admin:false
                };
            }else if(user.profil_image != "" && req.file === undefined){
                var newUser = {
                    nom: req.body.nom,
                    prenom:req.body.prenom,
                    age:new Date(user.age).toISOString().split("T")[0],
                    mail:user.mail,
                    password:user.password,
                    profil_image:user.profil_image,
                    poste_occupe:req.body.poste_occupe,
                    admin:false
                };
            }else{
                var newUser = {
                    nom: req.body.nom,
                    prenom:req.body.prenom,
                    age:new Date(user.age).toISOString().split("T")[0],
                    mail:user.mail,
                    password:user.password,
                    profil_image:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
                    poste_occupe:req.body.poste_occupe,
                    admin:false
                };
                deletedOldFile= true;
            }
            if(deletedOldFile){
                
                var allPath =  user.profil_image
                var filename = allPath.split("/")[allPath.split("/").length - 1]
                if(filename != "default_icon.png"){
                    fs.unlink(`./images/${filename}`,()=>{})
                }
                
            }
            User.update(newUser , { where: {utilisateur_id : req.auth.userId}})
                .then(() =>{res.status(201).json({message:"Utilisateur modifié"})})
                .catch(err => {res.status(500).json({error:err.message})});
        })
        .catch(error => res.status(500).json({error}))
    }
};

exports.profil = (req, res, next) => {

    User.findOne({ where : { utilisateur_id: req.auth.userId}})
    .then(user =>{
        res.send(user)
    })
    .catch(error => res.status(500).json({error}))
   

};

exports.getUser = (req, res, next) => {

    if(req.params.id == req.auth.userId || req.admin){
        User.findOne({ where : { utilisateur_id: req.params.id}})
        .then(user =>{
            res.send(user)
        })
        .catch(error => res.status(500).json({error}))
    }else{
        res.status(401).json({error:"Vous n\'avez pas l\'autorisation pour obtenir ces informations"})
    }
   

};