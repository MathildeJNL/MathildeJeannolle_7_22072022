<template>

  <div class="home">
    
    <div id="bloc1">
      <!--lien qui ramène à la page de connexion au clic du logo-->
      <router-link id="return" to="/"><img class="group-logo" src="../assets/groupLogo.png" alt="logo entreprise"></router-link>
      
        <div id="formulaire">
          <label for="file" class="label-file">Choisir une image de profil</label>
          <input id="file" class="input-file" type="file"  @change="change_name">
          <div id="preview">
            <img class="profil-picture" v-if="url" :src="url" />
          </div>
          <input class="txt" type="text" placeholder="Nom" v-model="nom">
          <input class="txt" type="text" placeholder="Prénom" v-model="prenom">
          <input class="txt" type="text" placeholder="Poste occupé" v-model="poste">
          <input id="date" type="date" v-model="age">
          <input class="txt" type="email" placeholder="Mail" v-model="mail">
          <input class="txt" type="password" placeholder="Password" v-model="password">
          <button @click="signup" id="inscription">S'inscrire</button>
          <span class="error-message">{{ error_message }}</span>
        </div>
    </div>
    
      <div id="background">
        <img id="background-img" src="../assets/entreprise.png" alt="photo de l'entreprise">
      </div>

  </div>

</template>

<style scoped>
.profil-picture {
  position: relative;
  display: inline-block;
  height: 80px;
  width: 80px;
  border-radius: 100%;
  border: 1px solid #deebff;
  text-align: center;
  margin-right: 6px;
  margin-left: 10px;
  object-fit: cover;
}

.error-message{
  color:#FD2D01;
  text-align: center;
  font-size: 15px;
}

.home{
  margin: 0;
  background-color: white!important;
}

.label-file {
    cursor: pointer;
    color: #FD2B01;
    font-weight: bold;
}

.label-file:hover {
    color: #FFD7D7;
}

.input-file {
    display: none;
}

label{
  font-size: 15px;
  font-style: italic;
  margin-top: 10px;
  margin-bottom: 10px;
}

.txt{
  padding-left: 10px;
  font-size: 15px;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  height: 45px;
  width: 72%;
  margin: 15px;
}

.home {
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #ffffff;
}

.group-logo{
  width: 40%;
  margin: 30px;
  display: flex;
  align-items: center;
}

#return{
  display: flex;
  justify-content: center;
}

#bloc1{
  width: 49%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

#formulaire{
  border-radius: 17px;
  box-shadow: 10px 15px 30px -8px #fd2b017a;
  width: 40%;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

#date{
  margin: 15px;
}

#inscription{
  margin: 20px;
  border-radius: 1px;
  border-style: solid;
  border-width: 1px;
  width: 40%;
  height: 35px;
  background-color: white;
  margin-top: 50px;
  font-size: 16px;
  text-align: center;
}

#inscription:hover{
    cursor: pointer;
    background-color: #FD2B01;
    color: #ffffff;
    border-color: #FD2B01;
}

#background{
  width: 70%;
  height: 100vh;
}

#background-img{
  object-fit: cover;
  height: 99.6%;
  width: 100%;
  position: relative;
}

@media all and (min-width: 769px) and (max-width: 1024px){

#background-img{
  display: none;
}

#background{
  display: none;
}

.group-logo{
  width: 60%;
}

#bloc1{
  width: 100%;
}

#formulaire{
  width: 60%;
}

}

@media all and (max-width: 768px){

.error-message{
  font-size: 11px;
}

.group-logo{
  width: 70%;
}

.txt{
  width: 70%;
  height: 23px;
}

#background-img{
  display: none;
}

#background{
  display: none;
}

#bloc1{
  width: 100%;
}

#formulaire{
  width: 80%;
}

#date{
  margin: 10px;
  height: 14px;
  font-size: 12px;
}

#inscription{
  margin-top: 30px;
}

}

</style>

<script>
import router from '@/router';

// @ is an alias to /src
export default {
  name: 'Signup',
  data(){
    return{
      nom: null,
      prenom: null,
      mail: null,
      password: null,
      age: null,
      poste: null,
      error_message:null,
      url:null
    }
  },
  methods:{
    change_name(){
      let image = document.getElementById("file").files[0];
      this.url = URL.createObjectURL(image);
    },
    signup(){
      let error = this.input_verification();
      if(error != ""){
        // une erreur
        this.error_message = error;
      }else{
        //permet de récupérer l'img de l'input
        let image = document.getElementById("file").files[0]
        //On crée un formulaire
        let formData = new FormData();
        //on ajoute au formulaire les input(ils font ref à data par le v-model)
        formData.append("image", image);
        formData.append("nom", this.nom);
        formData.append("prenom", this.prenom);
        formData.append("mail", this.mail);
        formData.append("password", this.password);
        formData.append("age", this.age);
        formData.append("poste_occupe", this.poste);

        //création d'options de l'envoie à l'API avec la méthode (POST) + les données formData
        const options = {
            method: 'POST',
            body: formData,
        };

        //Je fais appel à l'API
        fetch("http://localhost:3000/api/auth/signup", options)

        /*1ère promesse .then = récupérer le résultat (res) de la requête au format JSON
        avec une vérif préalable que la requête s'est bien passée*/
          .then(function(res){
            if(res.ok){
              return res.json();
            }
          })

        //2ème promesse si la 1ère est bonne :
          .then(function(value){
            if(value.error){
              alert("Une erreur est survenue");
            }else{
              alert("Votre compte a bien été créé");
              router.push("/")
            }
          })
          
        //Si il y a une erreur au moment d'appeler le serveur, on renvoi :
          .catch(function(err) {
            alert("Une erreur est survenue... Le serveur ne répond pas")
          });
        }
    },

    input_verification(){

      let mail = this.mail;
      let password = this.password;
      let nom = this.nom;
      let prenom = this.prenom;
      let age = this.age;
      let poste = this.poste;

      let error = "";
      const PASSWORD_REGEX =  /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
      const MAIL_REGEX =  /^[a-zA-Z0-9-_.]+[@]{1}[a-zA-Z]+[.]{1}[a-z]{2,10}$/;
      const NOM_PRENOM_REGEX = /^([a-zA-ZÉéèàçùêâûôëï'-]+)$/;
      const POSTE_REGEX = /^([ a-zA-ZÉéèàçùêâûôëï'-]+)$/;

      if(password == null || !password.match(PASSWORD_REGEX)){
        error += "Le mot de passe doit contenir 8 caractères minimum, une majuscule, une minuscule, un symbole et un chiffre; "
      }
      if(mail == null || !mail.match(MAIL_REGEX)){
        error += "L'adresse mail n'est pas valide; "
      }
      if(nom == null || !nom.match(NOM_PRENOM_REGEX)){
        error += "Le nom n'est pas valide; "
      }
      if(prenom == null || !prenom.match(NOM_PRENOM_REGEX)){
        error += "Le prénom n'est pas valide; "
      }
      if(age == null || age == undefined || age == ""){
        error += "Veuillez saisir une date; "
      }
      if(poste == null || !poste.match(POSTE_REGEX)){
        error += "Veuillez indiquer un poste; "
      }

      return error;

    }

  }

}

</script>