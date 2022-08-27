<template>

  <header id="red-band">
    <router-link id="return" to="/accueil"><img id="group-logo" src="../assets/whitelogo.png" alt="logo entreprise"></router-link>
    <p class="text-pp"><img class="profil-picture logo-background-white" :src="profil_image" alt="profil">{{ user_name }}</p>
  </header>

  <section id="main">
    <div class="publication">
      <div class="profil-publication">
        <p class="text-pp"><img class="profil-picture" :src="profil_image" alt="profil">{{ user_name }}</p>
      </div>
      <div class="picture-post">
        <label for="file" class="label-file">Ajouter un image</label>
        <input id="file" class="input-file" type="file" @change="change_name">
        <div id="preview">
            <img class="pict" v-if="url" :src="url" />
        </div>
        <input class="description" type="text" placeholder="Ta description" v-model="description" @keyup.enter="send_poste">
        <button id="publier" @click="send_poste">Publier</button>
        <span v-if="error_message">{{ error_message }}</span>
      </div>
    </div>

  </section>
  <Footer :isFixed="true"></Footer>
</template>

<style scoped>

header{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-style: none;
  background-color: #FD2D01;
  height: 6vh;
}
label{
  font-size: 15px;
  font-style: italic;
  margin-bottom: 25px;
}
nav {
  border-style: none;
  background-color: #FFD7D7;
  height: 50px;
  display: flex;
  justify-content: center;
  font-size: 17px;
  align-items: center;
}
hr{
  width: 50%;
}
.text-nav {
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
}
.logo-background-white{
  background-color: #ffff;
}
.text-nav {
  text-decoration: none;
  color: black;
}
.text-pp{
  display: flex;
  align-items: center;
  margin: 15px;
}
.label-file {
    cursor: pointer;
    color: #FD2B01;
    font-weight: bold;
    margin-left: 10px;
}
.label-file:hover {
    color: #FFD7D7;
}
.input-file {
    display: none;
}
.publication {
  border-radius: 10px;
  width: 25%;
  margin: 15px;
  box-shadow: 12px 15px 40px #ffd7d7;
  background-color: #ffff;
}
.profil-picture {
  position: relative;
  display: inline-block;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  border: 1px solid #deebff;
  text-align: center;
  margin-right: 15px;
  /* margin-left: 10px; */
  object-fit: cover;
}
.text-pp {
  display: flex;
  align-items: center;
  margin: 15px;
}
.picture-post{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.pict {
  position: relative;
  width: 100%;
  height: 20vh;
  object-fit: contain;
}
.description{
  margin-left: 10px;
  width: 50%;
}
#red-band {
  border-style: none;
  background-color: #FD2D01;
}
#group-logo {
  margin: 10px;
}
#return{
    display: flex;
    justify-content: center;
}
#main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 60px;
}
#publier{
  margin: 40px;
  border-radius: 1px;
  border-style: solid;
  border-width: 1px;
  width: 25%;
  height: 30px;
  background-color: white;
  font-size: 16px;
  text-align: center;
}
#publier:hover{
    cursor: pointer;
    background-color: #FD2B01;
    color: #ffffff;
    border-color: #FD2B01;
}
@media all and (min-width: 769px) and (max-width: 1024px) {
  .publication{
    width: 60%;
  }
}
@media all and (max-width: 768px) {
  p{
    font-size: 11px;
  }
  .text-pp{
    font-size: 10px;
  }
  .profil-picture{
    height: 20px;
    width: 20px;
    margin-left: 5px;
    margin-right: 5px;
  }
  .publication{
    margin: 0;
    width: 85%;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .label-file{
    margin-left: 0;
    font-size: 11px;
  }
  .description{
    margin-left: 0;
    font-size: 11px;
  }
  #main{
    margin: 0;
  }
  #group-logo{
    width: auto;
  }
  #publier{
    margin: 15px;
    width: 20%;
    height: 20px;
    font-size: 11px;
  }
}

</style>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import store from '@/store'
import router from '@/router'

export default {
  name: 'NewPost',
  components: { Footer },
  data(){
    return{
      nom:null,
      prenom:null,
      profil_image:null,
      url:null,
      file_name:"",
      description:"",
      error_message:""
    }
  },
  methods: {
    change_name(){
      let image = document.getElementById("file").files[0];
      this.url = URL.createObjectURL(image);
      this.file_name = image.name;
    },
    //envoyer le post
    async send_poste(){
      //exécute la fonction "verify_form" pour vérifier le formulaire
      let message = this.verify_form()
      //si il n'y a pas de message, il n'y a pas d'erreur
      if(message == ""){
        //on récupère l'img
        let image = document.getElementById("file").files[0];
        //on crée un formulaire
        let formData = new FormData();
        //on ajoute la description
        formData.append('description',this.description);
        //s'il y a une img
        if(image != null || image != undefined || image != ""){
          //on l'ajoute au formulaire
          formData.append("image",image)
        }

        //on crée les options d'envoi à l'API
        const options = {
          method: 'POST',
          body: formData,
          headers:{
            "Authorization": "Bearer " + store.state.token
          }
        };

        const res = await fetch("http://localhost:3000/api/poste", options)
        const resData = await res.json();

        //si la req est bien passée on met une alerte(l.267)
        if(resData.poste_id){
          alert("Le poste a été correctement crée !")
          //et on renvoie sur la page d'accueil
          router.push("/accueil")
        }else if(resData.message){
          this.error_message = resData.message
        }else{
          this.error_message = "Une erreur est survenue, veuillez réitérer ultérieurement."
        }

      }else{
        this.error_message = message;
      }

    },
    //méthode de vérification du formulaire
    verify_form(){
      let message = "";
      if(this.description == "" || this.description == null || this.description == undefined)
        message += "veuillez saisir une description."

      return message
    }
  },
  computed:{
    user_name(){
      return this.nom + " " + this.prenom;
    }
  },
  mounted(){
    if(store.state.token != null){
      if(store.state.nom == null){
        const options = {
          method: 'GET',
          headers:{
            "Authorization": "Bearer " + store.state.token
          }
        };

        fetch("http://localhost:3000/api/auth", options)

          .then(res =>{
            return res.json();
          })
          .then(data =>{
            if(!data.error){
              this.nom = data.nom;
              this.prenom = data.prenom;
              this.profil_image = data.profil_image;
              store.state.nom = this.nom;
              store.state.prenom = this.prenom;
              store.state.profil_image = this.profil_image;
            }else{
                
            }
          })
          .catch(err =>{
            console.log(err.error)
          })
      }else{
        this.nom = store.state.nom;
        this.prenom = store.state.prenom;
        this.profil_image = store.state.profil_image;
      }
    }else{
      router.push("/")
    }
  }
}
</script>