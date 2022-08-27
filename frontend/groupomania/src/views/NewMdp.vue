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
    <div id="formulaire">
      <input class="txt" type="password" placeholder="New password" id="password" v-model="password"
        @keyup.enter="rest_password">
      <input class="txt" type="password" placeholder="Confirm Password" id="confirm_password" v-model="valid_password"
        @keyup.enter="rest_password">
      <span v-if="error_message" class="error-message">{{ error_message }}</span>
      <button type="submit" class="pure-button pure-button-primary" @click="rest_password">Confirmer</button>
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

.error-message {
  color: #FD2D01;
  text-align: center;
  font-size: 15px;
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

.logo-background-white {
  background-color: #ffff;
}

#return {
  display: flex;
  justify-content: center;
}

#group-logo {
  margin: 10px;
}

/*FORMULAIRE*/
.txt {
  padding-left: 10px;
  font-size: 15px;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  height: 45px;
  width: 72%;
  margin: 15px;
}

.pure-button {
  border-radius: 1px;
  border-style: solid;
  border-width: 1px;
  width: 40%;
  height: 40px;
  background-color: #ffd7d7;
  border-color: #ffd7d7;
  color: black;
  font-size: 16px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  text-decoration: none;
}

.pure-button:hover {
  cursor: pointer;
  background-color: #4E5166;
  color: white;
  border-color: #4E5166;
}

#main {
  display: flex;
  align-items: center;
  justify-content: center;
}

#formulaire {
  border-radius: 17px;
  box-shadow: 10px 15px 30px -8px #fd2b017a;
  width: 20%;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 60px;
  background-color: white;
}

@media all and (min-width: 769px) and (max-width: 1024px) {
  #formulaire {
    width: 60%;
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

  .text-nav {
    display: flex;
    align-items: center;
  }

  .profil-picture {
    height: 20px;
    width: 20px;
  }

  #group-logo {
    width: auto;
  }

  #formulaire {
    padding: 0;
    margin: 0;
    margin-top: 30px;
    width: 80%;
  }

  .txt {
    font-size: 11px;
    height: 20px;
    width: 70%;
  }

  .pure-button {
    width: 30%;
    height: 25px;
    font-size: 11px;
  }
}
</style>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import router from '@/router'
import store from '@/store'

export default {
  name: 'password',
  components: { Footer },
  data() {
    return {
      nom: null,
      prenom: null,
      profil_image: null,
      password: null,
      valid_password: null,
      error_message: null,
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
    }
  },
  methods: {
    async rest_password() {
      let message = this.validation_form()
      if (message === "") {
        let data = {
          "password": this.password
        }
        const options = {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {
            "Authorization": "Bearer " + store.state.token,
            "Content-Type": "application/json"
          }
        };
        const res = await fetch("http://localhost:3000/api/auth/password/" + this.userId, options)
        const resData = await res.json();

        if (resData.error) {
          alert(resData.error)
        } else {
          alert("profil mis à jour.")
          router.push("/profil")
        }
      } else {
        this.error_message = message
      }
    },
    validation_form() {
      const PASSWORD_REGEX = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
      if (this.password.match(PASSWORD_REGEX)) {
        if (this.valid_password === this.password) {
          return ""
        } else {
          return "Veuillez confirmer le mot de passe."
        }
      } else {
        return "Le mot de passe doit contenir 8 caractères minimum, une majuscule, un chiffre et un symbole."
      }
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