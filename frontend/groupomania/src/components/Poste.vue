<template>

<div class="publication" v-if="display">
    <div class="profil-publication">
        <p class="text-pp"><img class="profil-picture" :src="user_image" alt="profil">{{ user_name }}</p>
        <div id="modification-icon" v-if="good_right">
            <div class="button" @click="deletePost">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0" />
                <span title="Supprimer" class="material-symbols-outlined trash">delete</span>
            </div>
            <div class="button" @click="updateMethod">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <span title="Modifer" class="material-symbols-outlined edit">edit</span>
            </div>
        </div>
    </div>
    <div class="picture-post">
        <!-- Mode edition -->
        <!-- <div class="change" v-if="edit_mode">
          <label for="file" class="label-file">Modifier l'image</label>
          <input id="file" class="input-file" type="file" @change="change_name">
        </div> -->
        <hr>
        <div v-if="contains_image">
          <img v-if="edit_mode" class="pict" :src="image_temp" alt="image_poste">
          <img v-else class="pict" :src="image_du_poste" alt="image_poste">
        </div>
        <div  @click="like">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0" />
          <div id="empty-heart" v-if="liked_poste">
            <span class="material-symbols-outlined liked favorite">favorite</span> <span class="heart-number">{{ nb_like }}</span>
          </div>
          <div id="empty-heart" v-else>
             <span class="material-symbols-outlined favorite">favorite</span> <span class="heart-number">{{ nb_like }}</span>
          </div>
        </div>
        <!-- Mode edition -->
        <div class="change" v-if="edit_mode">
          <input id="texte-description" class="input" type="text" v-model="description_temp">
          <button id="publier" @click="update_poste">Update</button>
        </div>

        <p class="description">{{ description_du_poste }}</p>

        <p class="description date-modif">{{ converted_date(date_creation) }}</p>

    </div>
    <hr>
    <div class="commentaires">
        <!-- Boucle -->
        <div class="comments" v-if="contains_commentaire">
            <div v-for="commentaire in all_commentaire" :key="commentaire.commentaires_id">
                <p class="user-id-comment"><img class="profil-picture" :src="commentaire.utilisateur.profil_image" alt="profil">
                <span class="user-comm">{{ commentaire.utilisateur.nom }} {{commentaire.utilisateur.prenom}}</span> a écrit <span class="date-modif">({{ converted_date(commentaire.date_creation) }})</span> :
                </p>
                <div class="commentaire">
                  <p class="comment">{{ commentaire.texte_commentaire }}</p> 
                  <span v-if="userId == commentaire.utilisateur.utilisateur_id || admin" class="delete-cross" @click="delete_commentaire(commentaire.commentaires_id)">X</span>
                </div>
            </div>
        </div>
        
        <div id="main-new-comment">
          <img class="profil-picture" :src="profil_image_user" alt="profil">
          <input type="text" name="commentaire" id="new-comment" placeholder="Ajouter un commentaire" v-model="commentaire_write" @keyup.enter="send_commentaire"> <button id="send-commentaire" @click="send_commentaire">Envoyer</button>
        </div>
        
        <span v-if="error_message" class="error-message"> {{ error_message }} </span>
    </div>
    
</div>

</template>

<style scoped>

.delete-cross{
  color:#FD2D01;
  cursor: pointer;
}

.delete-cross:hover{
  color:#FFD7D7;
  cursor: pointer;
}

.commentaire{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
}

.comments{
  max-height: 20vh;
  overflow-y: scroll;
}

.error-message{
  color:#FD2D01;
  text-align: center;
  font-size: 15px;
  display: block;
}

.label-file {
    cursor: pointer;
    color: #FD2B01;
    font-weight: bold;
    margin-left: 10px;
    display: block;
    text-align: center;
}

.label-file:hover {
    color: #FFD7D7;
}

.input-file {
    display: none;
}

#modification-icon{
    display: flex;
    justify-content: space-between;
}

hr{
  width: 99%;
}

.publication {
  border-radius: 10px;
  width: 30%;
  margin: 60px;
  box-shadow: 12px 15px 40px #ffd7d7;
  background-color: #ffff;
}

.profil-publication{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.trash{
  margin-right: 15px;
}

.trash:hover{
  cursor: pointer;
  color: #FD2D01;
}

.edit{
  margin-right: 15px;
}

.edit:hover{
  color: #4E5166 !important;
  cursor: pointer;
}

.material-symbols-outlined:hover {
  font-variation-settings:
  'FILL' 1,
  'wght' 300,
  'GRAD' 0,
  'opsz' 48;
  color: #FD2D01;
  cursor: pointer;
}

/*css pour l'utilisateur qui a like*/
.liked {
  font-variation-settings:
  'FILL' 1,
  'wght' 300,
  'GRAD' 0,
  'opsz' 48;
  color: #FD2D01;
}

.profil-picture {
  position: relative;
  display: inline-block;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  border: 1px solid #deebff;
  text-align: center;
  margin-right: 6px;
  margin-left: 10px;
  object-fit: cover;
}

.text-pp {
  display: flex;
  align-items: center;
  margin-right: 15px;
  font-weight: bold;
}

.pict {
  position: relative;
  width: 100%;
  height: 20vh;
  object-fit: contain;
}

.description{
  margin-left: 10px;
}

.date-modif{
  font-style: italic;
  font-size: 12px;
  color: grey;
}

.user-comm{
  font-weight: bold;
}

.user-id-comment{
  display: flex;
  align-items: center;
}

.commentaires{
  margin-left: 10px;
  margin-bottom: 40px;
}

#empty-heart{
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
}

#new-comment{
  border-radius: 5px;
  font-size: 15px;
  font-style: italic;
  border: 1px solid #f2f2f2;
  width: 65%;
}

#main-new-comment{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin-top: 20px;
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

#send-commentaire{
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

#send-commentaire:hover{
    cursor: pointer;
    background-color: #FD2B01;
    color: #ffffff;
    border-color: #FD2B01;
}

#texte-description{
    display:block;
    margin-right: auto;
    margin-left: auto;
    width: 70%;
  }

#publier{
    width: 60%;
}

.change{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
}

@media all and (min-width: 769px) and (max-width: 1024px) {
  .publication{
    width: 60%;
  }

  #texte-description{
    display:block;
    margin-right: auto;
    margin-left: auto;
    width: 70%;
  }

  #publier{
    width: 60%;
  }

}

@media all and (max-width: 768px) {
  p{
    font-size: 11px;
  }

  #texte-description{
    display:block;
    margin-right: auto;
    margin-left: auto;
    width: 70%;
  }

  #publier{
    font-size: 14px;
    width: 40%;
    height: 20px;
  }

  .text-pp{
    font-size: 10px;
  }
  
  .profil-picture{
    height: 20px;
    width: 20px;
    margin-left: 5px;
  }

  .trash{
    font-size: 20px;
  }

  .edit{
    font-size: 20px;
  }

  .favorite{
    font-size: 20px;
  }

  .heart-number{
    font-size: 11px;
  }

  .publication{
    margin: 0;
    width: 85%;
    margin-top: 30px;
    margin-bottom: 30px;
    box-shadow: 6px 6px 25px #ffd7d7;
  }

  .main-list{
    font-size: 11px;
  }

  #new-comment{
    font-size: 11px;
  }

  #send-commentaire{
    font-size: 14px;
    width: 40%;
    height: 20px;
  }
}

</style>

<script setup>
//permet d'être sur 2 chiffres
function with_2_digit(value){
    if(value < 10)
        value = "0" + value;
    return value;
}

//afficher proprement la date
function converted_date(value){
    //on récupère tous les éléments nécessaire à l'affichage de la date & heure
    let date = new Date(value);
    let months = with_2_digit(date.getMonth() + 1);
    let days = with_2_digit(date.getDate());
    let years = with_2_digit(date.getFullYear());

    let seconds = with_2_digit(date.getSeconds());
    let minutes = with_2_digit(date.getMinutes());
    let hours = with_2_digit(date.getHours());
    //on les affiche sous ce format :
    return days + "." + months + "." + years + ", " + hours + ":" + minutes + ":" + seconds;
}

//permet de reformater le comm crée avec les infos de l'ustilisateur connecté pour le mettre dans la liste des commentaires
function formated_comment_receive(value){
  let new_value = {
    "commentaires_id": value.commentaires_id,
    "texte_commentaire": value.texte_commentaire,
    "date_creation": value.date_creation,
    "poste_id": value.poste_id,
    "utilisateur_id": value.utilisateur_id,
    "utilisateur":{
      "utilisateur_id":this.userId,
      "nom":this.nom_user,
      "prenom":this.prenom_user,
      "profil_image":this.profil_image_user,
    }
  }
  return new_value
  
}

</script>

<script scoped>
import store from '@/store'

// @ is an alias to /src
export default {
  name: 'Poste',
  data(){
    return{
      edit_mode:false,
      error_message:null,
      image_du_poste:this.poste_image,
      description_du_poste:this.description,
      image_temp:null,
      description_temp:null,
      liked_poste: this.liked,
      nb_like:this.nb_heart,
      display:true,
      commentaire_write:null,
      all_commentaire:this.commentaires
    }
  },
  //props = proporiétés ; transmet les données d'un composant parent à un de ses composants enfants (ici : accueil(parent) à post(enfant))
  props:{
    user:null,
    admin:false,
    poste_id:null,
    description:null,
    poste_image:null,
    commentaires:[],
    date_creation:null,
    nb_heart:null,
    userId:null,
    liked:null
  },
  //computed = "calculer" des données à la volée, par exemple savoir si l'user a le droit de modif/suppression...(l.466)
  computed:{
    user_image(){
        return this.user.profil_image
    },
    user_name(){
        return this.user.nom + " " + this.user.prenom
    },
    good_right(){
        return this.userId == this.user.utilisateur_id || this.admin
    },
    good_right_commentaire(utilisateur_id_commentaire){
      return this.userId == utilisateur_id_commentaire || this.admin
    },
    contains_commentaire(){
      return this.all_commentaire.length > 0
    },
    profil_image_user(){
      return store.state.profil_image
    },
    nom_user(){
      return store.state.nom
    },
    prenom_user(){
      return store.state.prenom
    },
    contains_image(){
      return this.image_du_poste != null || this.image_du_poste != undefined || this.image_temp != null || this.image_temp != undefined
    }
    
  },
  methods:{
    //appuie sur le logo poubelle = suppression en BDD et si tout se passe bien on n'affiche plus le composant post
    async deletePost(){
      if (confirm('Souhaitez-vous vraiment supprimer le poste?')) {
        //création d'options avec la méthode DELETE + bearer token
        const options = {
          method: 'DELETE',
          headers:{
            "Authorization": "Bearer " + store.state.token
          }
        };
        //Fetch : utilisation de façon synchrone(await) pour éviter les erreurs avec Vue + precision de ce qui doit être suppr
        const res = await fetch("http://localhost:3000/api/poste/" + this.poste_id, options);
        //on met le résultat du fetch en json
        const data = await res.json();

        //si la requête est bien passée on n'affiche plus le post
        if(data.message){
          this.display = false;
        //sinon on affiche un message d'alerte de l'erreur si spécifique  
        }else if(data.error){
          alert(data.error);
        //sinon une autre erreur (pb serveur)  
        }else{
          alert("La suppression ne fonctionne pas pour le moment.");
        }
      } else {
        // do nothing
      }
    },

    //passage en mode édition du poste
    updateMethod(){
      //inverse le mode d'édition : true à false ou false à true
      this.edit_mode = !this.edit_mode; 
      //remettre à zéro les variables temporaires
      this.description_temp = this.description_du_poste;
      //remettre à zéro les variables temporaires
      this.image_temp = this.image_du_poste;
      //remettre à zéro le message d'erreur 
      this.error_message=null;
    },
    //gestion du like
    async like(){
      //initialise action en mode like  
      let like_action = 1;
      //si l'utilisateur connecté a déjà liké le poste et qu'il rappui sur le coeur on passe sur un dislike donc -1 
      if(this.liked_poste){
        like_action = -1;
      }
      //on crée les données d'envoie à l'API
      let data = {
        "like":like_action
      };
      
      //création d'options avec la méthode POST + data en JSON + content-type en JSON + bearer token
      const options = {
        method: 'POST',
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json",
            "Authorization": "Bearer " + store.state.token
        }
      };

      //Fetch : utilisation de façon synchrone(await) pour éviter les erreurs avec Vue(pb de lecture des data(this + xxx)) + precision de ce qui doit être suppr
      const res = await fetch("http://localhost:3000/api/coeur/" + this.poste_id, options);
      //on met le résultat du fetch en json
      const resData = await res.json();

      //si la requête est passée
      if(resData.message){
        //on inverse le liked_poste de true à false ou inversement
        this.liked_poste = !this.liked_poste;
        //si like = +1
        if(this.liked_poste){
          this.nb_like += 1;
        //sinon : -1
        }else{
          this.nb_like -= 1;
        }
      }else{
        alert("une erreur est survenue lors du like");
      }
    },

    //MAJ du poste
    async update_poste(){
      //récupère l'img
      // let image = document.getElementById("file").files[0];
      let image = null;
      //crée le nv formulaire
      let formData = new FormData();
      //nvlle description
      formData.append('description',this.description_temp);
      
      //si il y a une img
      if(image != null || image != undefined || image != ""){
        //on l'ajoute au nv formulaire
        formData.append("image",image);
      }
      //création d'options avec la méthode PUT + nv formulaire + bearer token
      const options = {
        method: 'PUT',
        body: formData,
        headers:{
          "Authorization": "Bearer " + store.state.token
        }
      };

      const res = await fetch("http://localhost:3000/api/poste/" + this.poste_id, options);
      const resData = await res.json();
      
      //si erreur
      if(resData.error){
        //on renvoie l'erreur du serveur
        this.error_message = resData.error;
        //on réinitialise l'img temporaire
        this.image_temp = this.image_du_poste;

      //si req est bien passée
      }else if(resData.message){
        //on enlève le mode édition
        this.edit_mode = false;
        //la description temporaire remplace la description précédente
        this.description_du_poste = this.description_temp;

        //si il y a une img, l'img' temporaire remplace l'img précédente
        if(image != null || image != undefined || image != ""){
          this.image_du_poste = this.image_temp;
        }
      } else{
        this.error_message = "Une erreur est survenue lors de la mise à jour";
      }
    },
    //prévisualisation de l'img
    change_name(){
      let image = document.getElementById("file").files[0];
      this.image_temp = URL.createObjectURL(image);
    },
    //envoie de commentaire
    async send_commentaire(){
      //si un commentaire est écrit
      if(this.commentaire_write != "" && this.commentaire_write != undefined && this.commentaire_write != null){
        
        const data = {
          "texte_commentaire":this.commentaire_write
        }
        const options = {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            "Authorization": "Bearer " + store.state.token,
            "Content-Type":"application/json"
          }
        };

        const res = await fetch("http://localhost:3000/api/commentaire/"+this.poste_id, options);
        const resData = await res.json();

        if(resData.error){
          this.error_message = resData.error;

        }else if(resData.commentaires_id){
          //On met le commentaire en premier
          //unshift = inverse de push, permet de mettre au début de la liste. Ex :
          //let list = [1,2,3]; 
          // list.push(4) => [1,2,3,4]
          // list.unshift(4) => [4,1,2,3] 
          this.all_commentaire.unshift(this.formated_comment_receive(resData));
          //on enlève le message d'erreur
          this.error_message=null;
          //on enlève le comm du input box
          this.commentaire_write = null;
        }else{
          this.error_message = "Une erreur est survenue";
        }
        
      }else{
        this.error_message = "veuillez saisir un commentaire.";
      }

    },
    //suppression du commentaire
    async delete_commentaire(com_id){
      //si on veut confirmer la suppression du comm
      if(confirm("Voulez-vous vraiment supprimer votre commentaire ?")){
        const options = {
          method: 'DELETE',
          headers:{
            "Authorization": "Bearer " + store.state.token
          }
        };

        const res = await fetch("http://localhost:3000/api/commentaire/"+com_id, options);
        const resData = await res.json();

        if(resData.error){
          this.error_message = "Une erreur est survenue lors de la suppression.";
        //on recrée un tableau sans le commentaire supprimé
        }else{
          let reset_commentaire = [];
          for(let commentaire of this.all_commentaire){
            if(commentaire.commentaires_id != com_id){
              reset_commentaire.push(commentaire);
            }
          }
          //on met ce nv tableau dans la liste des commentaires affichés
          this.all_commentaire = reset_commentaire;
        }
      }
    }
  }
}
</script>