<template>

  <div class="home">
    
    <div id="bloc1">
      <img class="group-logo" src="../assets/groupLogo.png" alt="logo entreprise">

        <div id="formulaire">
          <input class="txt" type="email" placeholder="Mail" v-model="email" @keyup.enter="login">
          <input class="txt" type="password" placeholder="Password" v-model="password" @keyup.enter="login">
          <button @click="login" id="connexion">Connexion</button>
          <!--false par défaut et devient true quand l'API renvoie une erreur-->
          <span v-if="error_found" class="error-message" >Identifiant ou mot de passe incorrect!</span>
          <p id="inscription-txt">Première visite : <router-link id="signup" to="/signup">S'inscrire</router-link></p>

        </div>
    </div>
    
      <div id="background">
        <img id="background-img" src="../assets/entreprise.png" alt="photo de l'entreprise">
      </div>

  </div>

</template>

<style scoped>
.error-message{
  color:#FD2D01;
  text-align: center;
  font-size: 15px;
}

.home{
  background-color: #ffffff;
}

input{
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    height: 45px;
    width: 72%;
    margin: 15px;
    margin-top: 50px;
}

.txt{
  padding-left: 10px;
  font-size: 15px;
}

.home {
  font-family: Lato, Arial, sans-serif;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.group-logo{
  width: 40%;
  margin: 30px;
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

#connexion{
  margin: 20px;
  border-radius: 1px;
  border-style: solid;
  border-width: 1px;
  width: 40%;
  height: 35px;
  background-color: white;
  margin-top: 50px;
  text-align: center;
}

#connexion:hover{
    cursor: pointer;
    background-color: #FD2B01;
    color: #ffffff;
    border-color: #FD2B01;
}

#inscription-txt{
  margin-top: 50px;
}

#signup{
  text-decoration: none;
  color: #FD2B01;
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
    height: none;
  }
}
@media all and (max-width: 768px){
  #background-img{
    display: none;
  }
  #background{
    display: none;
  }
  .group-logo{
    width: 70%;
  }
  .txt{
    font-size: 12px;
  }
  #bloc1{
    width: 100%;
  }
  #formulaire{
    width: 80%;
  }
}

</style>

<script>
// @ is an alias to /src
import router from '@/router'
import store from '@/store'

export default {
  name: 'Login',
  data(){
    return{
      email: null,
      password: null,
      error_found:false
    }
  },
  methods: {
    //méthode asynchrone
    async login(){
      let email = this.email;
      let password = this.password;
      //créer const data pour envoyer à l'API
      const data = {
        email,
        password,
      }
      //création d'options de l'envoie à l'API avec la méthode POST + content type JSON et les data au format JSON
      const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
              "Content-Type":"application/json"
            }
        };

      //Fetch : utilisation de façon synchrone(await) pour éviter les erreurs avec Vue
      const res = await fetch("http://localhost:3000/api/auth/login", options);

      //on met le résultat du fetch en json
      const resData = await res.json();

      //si la requête s'est bien passée on reçoit un token et on stock les onfos dans le store(Vue) et dans le session storage
      if(resData.token){
        store.state.token = resData.token;
        store.state.userId = resData.userId;
        store.state.admin = resData.admin;

        //mettre dans la session storage du nav pour éviter de perdre les infos au moment du rechargement de la page
        sessionStorage.setItem("token",resData.token);
        sessionStorage.setItem("userId",resData.userId);
        sessionStorage.setItem("admin",resData.admin);

        //après connexion on envoi à la page d'accueil
        router.push("/accueil");

      //si erreur on met "error-found" à true pour afficher le message d'erreur  
      }else{
        this.error_found = true;
      }
    }
  },
  //(Vue) mounted = au moment de la création de la vue pour vérifier que les infos ne sont pas déjà dans le local storage (sinon pax déjà connectée)
  mounted(){
    //si le token, l'userId et l'admin de stockés dans le local storage :
    if(sessionStorage.getItem('token') && sessionStorage.getItem('userId') && sessionStorage.getItem('admin')){
      //on stock ces infos dans le store (Vue)
      store.state.token = sessionStorage.getItem('token');
      store.state.userId = sessionStorage.getItem('userId');
      store.state.admin = sessionStorage.getItem('admin');
      //et on renvoie à la page d'accueil
      router.push("/accueil");
    }
  }
}

</script>
