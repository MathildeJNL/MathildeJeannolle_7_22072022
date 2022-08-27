<template>

  <header id="red-band">
    <router-link id="return" to="/accueil"><img id="group-logo" src="../assets/whitelogo.png" alt="logo entreprise">
    </router-link>
    <router-link class="text-nav" to="/profil">
      <p class="text-pp"><img class="profil-picture logo-background-white" :src="profil_image" alt="profil">{{ user_name
      }}</p>
    </router-link>
  </header>

  <section id="main">

    <div class="publication">
      <label for="file" class="label-file">Modifier l'image</label>
      <input id="file" class="input-file" type="file" @change="change_name">
      <img class="profil-picture main-profil" :src="profil_image" alt="profil">
      <p id="new-name"><b>NOM :</b> <input type="text" class="text" placeholder="NOM" v-model="nom"
          @keyup.enter="update_profil"></p>
      <p id="new-name"><b>Prénom :</b> <input type="text" class="text" v-model="prenom" @keyup.enter="update_profil">
      </p>
      <p id="poste-occupe"><b>Poste occupé :</b> <input type="text" class="text" placeholder="Poste occupé"
          v-model="poste_occupe" @keyup.enter="update_profil"></p>
      <p class="text">Anniversaire dans {{ day_last_birth }} jours</p>
      <div id="options-buttons">
        <router-link id="new-mdp-button" class="button" to="/password">Changer de mot de passe</router-link>
        <button id="update-button" class="button" @click="update_profil">Mise à jour</button>
        <button id="suppr-button" class="button" @click="delete_user">Supprimer le compte</button>
      </div>
    </div>

  </section>
  <Footer :isFixed="true"></Footer>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-style: none;
  background-color: #FD2D01;
  height: 6vh;
}

.button {
  margin-left: 5px;
}

.logo-background-white {
  background-color: #ffff;
}

.text-nav {
  text-decoration: none;
  color: black;
}

.text-pp {
  display: flex;
  align-items: center;
  margin: 15px;
}

.publication {
  border-radius: 30px;
  width: 25%;
  margin: 15px;
  padding-top: 30px;
  box-shadow: 12px 15px 40px #ffd7d7;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
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
}

label {
  font-size: 15px;
  font-style: italic;
  margin-top: 10px;
  margin-bottom: 10px;
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

.main-profil {
  height: 90px;
  width: 90px;
}

.main-info {
  font-size: 24px;
}

.text {
  line-height: 1px;
}

#group-logo {
  margin: 10px;
}

#return {
  display: flex;
  justify-content: center;
}

#main {
  background-color: #F2F2F2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 75px;
}

#options-buttons {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  width: 90%;
}

#new-mdp-button {
  border-radius: 1px;
  border-width: 1px;
  width: 40%;
  height: 40px;
  background-color: #4E5166;
  color: #ffff;
  margin-top: 15px;
  margin-bottom: 15px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#update-button {
  border-radius: 1px;
  border-style: solid;
  border-width: 1px;
  width: 40%;
  height: 40px;
  background-color: #4E5166;
  border-color: #4E5166;
  color: #ffff;
  font-size: 16px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
}

#update-button:hover {
  cursor: pointer;
  background-color: #ffd7d7;
  color: black;
  border-color: #ffd7d7;
}

#new-mdp-button:hover {
  cursor: pointer;
  background-color: #ffd7d7;
  color: black;
  border-color: #ffd7d7;
}

#suppr-button {
  border-radius: 1px;
  border-style: solid;
  border-width: 1px;
  width: 40%;
  height: 40px;
  background-color: #FD2B01;
  border-color: #FD2B01;
  color: #ffff;
  font-size: 16px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
}

#suppr-button:hover {
  cursor: pointer;
  background-color: #ffd7d7;
  color: black;
  border-color: #ffd7d7;
}

@media all and (min-width: 769px) and (max-width: 1260px) {
  .publication {
    width: 60%;
    padding-bottom: 15px;
  }
}

@media all and (max-width: 768px) {

  p {
    font-size: 11px;
  }

  .text-pp {
    margin: 0;
    margin-right: 5px;
  }

  label {
    font-size: 11px;
  }

  .text-nav {
    display: flex;
    align-items: center;
  }

  .profil-picture {
    height: 20px;
    width: 20px;
  }

  .main-profil {
    height: 60px;
    width: 60px;
  }

  .main-info {
    font-size: 15px;
  }

  .text {
    font-size: 11px;
  }

  .publication {
    margin: 0;
    width: 85%;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  #group-logo {
    width: auto;
  }

  #options-buttons {
    font-size: 11px;
  }

  #suppr-button {
    width: 30%;
    height: 30px;
    font-size: 11px;
  }

  #update-button {
    width: 30%;
    height: 30px;
    font-size: 11px;
  }

  #new-mdp-button {
    width: 30%;
    height: 30px;
    text-align: center;
  }
}
</style>

<script setup>

function with_2_digit(value) {
  if (value < 10)
    value = "0" + value
  return value
}

function until_day_birth(value) {
  let date = new Date(value);
  let date_day = date.getDate();
  let date_month = date.getMonth() + 1;

  var myBirthday, today, bday, diff, days;

  myBirthday = [date_day, date_month]

  today = new Date();
  bday = new Date(today.getFullYear(), myBirthday[1] - 1, myBirthday[0]);
  if (today.getTime() > bday.getTime()) {
    bday.setFullYear(bday.getFullYear() + 1);
  }
  diff = bday.getTime() - today.getTime();
  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return days
}

</script>


<script>
import Footer from '@/components/Footer.vue'
import router from '@/router'
import store from '@/store'

export default {
  name: 'Modification',
  components: { Footer },
  data() {
    return {
      nom: null,
      prenom: null,
      profil_image: null,
      poste_occupe: null,
      age: null,
    }
  },
  computed: {
    isAdmin() {
      return store.state.admin;
    },
    userId() {
      return store.state.userId;
    },
    user_name() {
      return this.nom + " " + this.prenom;
    },
    day_last_birth() {

      let days = this.until_day_birth(this.age)
      return days;
    }
  },
  methods: {
    async update_profil() {
      let image = document.getElementById("file").files[0];
      let formData = new FormData();
      if (image != "" && image != undefined && image != null) {
        formData.append("image", image)
      }
      formData.append("nom", this.nom);
      formData.append("prenom", this.prenom);
      formData.append("poste_occupe", this.poste_occupe);

      const options = {
        method: 'PUT',
        body: formData,
        headers: {
          "Authorization": "Bearer " + store.state.token
        }
      };
      const res = await fetch("http://localhost:3000/api/auth/" + this.userId, options)
      const resData = await res.json();

      if (resData.error) {
        alert(resData.error)
      } else {
        alert("profil mis à jour.")
        router.push("/profil")
      }

    },
    async delete_user() {
      if (confirm("Voulez-vous vraiment supprimer votre compte ?")) {
        const options = {
          method: 'DELETE',
          headers: {
            "Authorization": "Bearer " + store.state.token
          }
        };

        const res = await fetch("http://localhost:3000/api/auth/" + this.userId, options);
        const resData = await res.json();

        if (resData.error) {
          alert(resData.error)
        //quand profil suppr, on reset tout et on renvoie sur la page de login  
        } else {
          alert("Profil supprimé.")
          sessionStorage.clear();
          store.state.admin = null;
          store.state.userId = null;
          store.state.token = null;
          store.state.nom = null;
          store.state.prenom = null;
          store.state.profil_image = null;
          router.push("/");
        }
      }
    },
    change_name() {
      let image = document.getElementById("file").files[0];
      this.profil_image = URL.createObjectURL(image);
    }
  },
  mounted() {
    if (store.state.token != null) {
      const options = {
        method: 'GET',
        headers: {
          "Authorization": "Bearer " + store.state.token
        }
      };
      fetch("http://localhost:3000/api/auth", options)
        .then(res => {
          return res.json();
        }).then(data => {
          if (!data.error) {
            this.nom = data.nom;
            this.prenom = data.prenom;
            this.profil_image = data.profil_image;
            this.poste_occupe = data.poste_occupe;
            this.age = data.age;
            store.state.nom = this.nom;
            store.state.prenom = this.prenom;
            store.state.profil_image = this.profil_image;
          } else {
            sessionStorage.clear();
            store.state.nom = null;
            store.state.prenom = null;
            store.state.profil_image = null;
            store.state.token = null;
            store.state.userId = null;
            store.state.admin = false;
            router.push("/")
          }
        }).catch(err => {
          console.log(err.error)
        });
    } else {
      router.push("/")
    }
  }
}
</script>