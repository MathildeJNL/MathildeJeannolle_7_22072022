<template>

  <header id="red-band">
    <router-link id="return" to="/accueil"><img id="group-logo" src="../assets/whitelogo.png" alt="logo entreprise">
    </router-link>
    <p class="text-pp"><img class="profil-picture logo-background-white" :src="profil_image" alt="profil">{{ user_name
    }}</p>
  </header>

  <section id="main">

    <div class="publication">
      <img class="profil-picture main-profil" :src="profil_image" alt="profil">
      <p class="text main-info">{{ nom }} - {{ prenom }}</p>
      <p class="text">{{ poste_occupe }}</p>
      <p class="text">Anniversaire dans {{ day_last_birth }} jours</p>
      <router-link id="modif-button" to="/modification">Modifier le profil</router-link>
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

.logo-background-white {
  background-color: #ffff;
}

.text-nav {
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
}

.add {
  font-variation-settings:
    'FILL' 0,
    'wght' 700,
    'GRAD' 200,
    'opsz' 48;
  font-size: 35px;
}

.add:hover {
  color: #ffff !important;
  cursor: pointer;
}

.logout {
  font-variation-settings:
    'FILL' 0,
    'wght' 700,
    'GRAD' 200,
    'opsz' 48;
  font-size: 30px;
}

.logout:hover {
  cursor: pointer;
  color: #ffff !important;
}

.text-pp {
  display: flex;
  align-items: center;
  margin: 10px;
}

.publication {
  border-radius: 30px;
  width: 25%;
  margin: 15px;
  padding-top: 30px;
  box-shadow: 12px 15px 40px #ffd7d7;
  background-color: #ffff;
  /* height: 30vh; */
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
  border: 1px solid #F2F2F2;
  text-align: center;
  margin-right: 6px;
  object-fit: cover;
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

#bloc-header-right {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
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

#modif-button {
  border-radius: 1px;
  border-style: solid;
  border-width: 1px;
  width: 40%;
  height: 35px;
  background-color: white;
  font-size: 16px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: #F2F2F2;
  color: black;
}

#modif-button:hover {
  cursor: pointer;
  background-color: #FD2B01;
  color: #ffffff;
  border-color: #FD2B01;
}

@media all and (min-width: 769px) and (max-width: 1024px) {
  .publication {
    width: 60%;
    padding-bottom: 15px;
  }
}

@media all and (max-width: 768px) {

  p {
    font-size: 11px;
  }

  .logout {
    font-size: 20px;
  }

  .add {
    font-size: 20px;
  }

  .text-pp {
    font-size: 10px;
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

  .publication {
    margin: 0;
    width: 85%;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  #group-logo {
    width: auto;
  }

  #modif-button {
    width: 35%;
    height: 20px;
    font-size: 11px;
  }
}
</style>

<script setup>

function with_2_digit(value) {
  if (value < 10)
    value = "0" + value
  return value
}
//internet : permet de trouver le nbre de jours avant l'anniv =>
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

<script scoped>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import router from '@/router'
import store from '@/store'

export default {
  name: 'Profil',
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
      //return 0
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
        })
        .then(data => {
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
        })
        .catch(err => {
          console.log(err.error)
        });
    } else {
      router.push("/")
    }
  }
}
</script>