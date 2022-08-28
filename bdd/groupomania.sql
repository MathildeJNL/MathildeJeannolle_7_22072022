CREATE DATABASE IF NOT EXISTS groupomania;

USE groupomania;


DROP TABLE IF EXISTS commentaire;
DROP TABLE IF EXISTS coeur;
DROP TABLE IF EXISTS poste;
DROP TABLE IF EXISTS utilisateur;

#------------------------------------------------------------
# Table: utilisateur
#------------------------------------------------------------

CREATE TABLE utilisateur(
        utilisateur_id Int  Auto_increment  NOT NULL ,
        nom            Varchar (100) NOT NULL ,
        prenom         Varchar (100) NOT NULL ,
        age            Datetime NOT NULL ,
        password       Varchar (255) NOT NULL ,
        profil_image   Varchar (1000),
        poste_occupe   Varchar (255) NOT NULL ,
        admin          Bool NOT NULL ,
        mail           Varchar (255) NOT NULL
	,CONSTRAINT utilisateur_AK UNIQUE (mail)
	,CONSTRAINT utilisateur_PK PRIMARY KEY (utilisateur_id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: poste
#------------------------------------------------------------

CREATE TABLE poste(
        poste_id       Int  Auto_increment  NOT NULL ,
        poste_image    Varchar (1000),
        description    Varchar (1000) NOT NULL ,
        date_creation  Datetime NOT NULL ,
        utilisateur_id Int NOT NULL
	,CONSTRAINT poste_PK PRIMARY KEY (poste_id)

	,CONSTRAINT poste_utilisateur_FK FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(utilisateur_id) ON DELETE CASCADE ON UPDATE NO ACTION
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: commentaire
#------------------------------------------------------------

CREATE TABLE commentaire(
        commentaires_id   Int  Auto_increment  NOT NULL ,
        texte_commentaire Varchar (1000) NOT NULL ,
        date_creation     Datetime NOT NULL ,
        poste_id          Int NOT NULL ,
        utilisateur_id    Int NOT NULL
	,CONSTRAINT commentaire_PK PRIMARY KEY (commentaires_id)

	,CONSTRAINT commentaire_poste_FK FOREIGN KEY (poste_id) REFERENCES poste(poste_id) ON DELETE CASCADE ON UPDATE NO ACTION
	,CONSTRAINT commentaire_utilisateur0_FK FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(utilisateur_id) ON DELETE CASCADE ON UPDATE NO ACTION
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: coeur
#------------------------------------------------------------

CREATE TABLE coeur(
        coeur_id       Int  Auto_increment  NOT NULL ,
        utilisateur_id Int NOT NULL ,
        poste_id       Int NOT NULL
	,CONSTRAINT coeur_PK PRIMARY KEY (coeur_id)

	,CONSTRAINT coeur_utilisateur_FK FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(utilisateur_id) ON DELETE CASCADE ON UPDATE NO ACTION
	,CONSTRAINT coeur_poste0_FK FOREIGN KEY (poste_id) REFERENCES poste(poste_id) ON DELETE CASCADE ON UPDATE NO ACTION
)ENGINE=InnoDB;


INSERT INTO `utilisateur` (`utilisateur_id`,`nom`,`prenom`,`age`,`password`,`profil_image`,`poste_occupe`,`admin`,`mail`) 
VALUES (DEFAULT,'Admin','Super','1999-01-06',MD5('P@ssword123456'),'http://localhost:3000/images/default_icon.png','Administrateur',1,'admin@admin.com');
