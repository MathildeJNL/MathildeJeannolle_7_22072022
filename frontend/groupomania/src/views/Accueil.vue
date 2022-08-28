<template>

  <header id="red-band">
    <img id="group-logo" src="../assets/whitelogo.png" alt="logo entreprise">
    <div id="bloc-header-right">
      <router-link class="text-nav" to="/newpost">
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <span title="Créer un poste" class="material-symbols-outlined add">add</span>
      </router-link>
      <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <span title="Déconnexion" class="material-symbols-outlined logout" @click="logout">logout</span>
      <router-link class="text-nav" to="/profil">
        <p class="text-pp"><img class="profil-picture logo-background-white" :src="profil_image" alt="profil">{{ user_name }}</p>
      </router-link>
    </div>

  </header>

  <section id="main">
    <!--on appelle le components "Poste" & on crée un poste pour chacun des postes récupérés-->
    <Poste
      :user="poste.utilisateur"
      :admin="isAdmin"
      :poste_id="poste.poste_id"
      :description="poste.description"
      :poste_image="poste.poste_image"
      :commentaires="poste.commentaires"
      :date_creation="poste.date_creation"
      :nb_heart="poste.coeur"
      :userId="userId"
      :liked="poste.liked"
      v-for="poste in postes" :key="poste.poste_id">
    </Poste>

  </section>

  <Footer></Footer>

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

#main {
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media all and (min-width: 769px) and (max-width: 1024px) {
  #group-logo {
    width: auto;
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
    margin-left: 5px;
  }

  #group-logo {
    width: auto;
  }
}
</style>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Poste from '@/components/Poste.vue'
import router from '@/router'
import store from '@/store'

export default {
  name: 'Accueil',
  components: { Footer, Poste },
  data() {
    return {
      postes: null,
      nom: null,
      prenom: null,
      profil_image: null
    }
  },
  //computed = "calculer" des données à la volée, par exemple (ce cas-ci) permet d'afficher les éléments que l'on appel
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
    //appuie du bouton deconnexion = suppression du local storage + store et renvoi à la page login
    logout() {
      store.state.admin = null;
      store.state.userId = null;
      store.state.token = null;
      store.state.nom = null;
      store.state.prenom = null;
      store.state.profil_image = null;
      sessionStorage.clear();
      router.push("/");
    }
  },
  //(Vue) mounted = au moment de la création de la vue pour récupérer les différents postes
  mounted() {
    if (store.state.token != null) {
      //création d'options avec la méthode GET + bearer token
      const options = {
        method: 'GET',
        headers: {
          "Authorization": "Bearer " + store.state.token
        }
      };
      //fetch pour récupérer tous les postes
      fetch("http://localhost:3000/api/poste", options)
        //1ère promesse : convertit en JSON
        .then(res => {
          return res.json();
        })
        //2ème promesse : met les données dans le data.poste
        .then(data => {
          if (!data.error) {
            this.postes = data;
          } else {

          }
        })
        //si erreur
        .catch(err => {
          console.log(err.error)
        })

      //si il manque des infos dans le store(nom, prenom et profil img),
      if (store.state.nom == null) {
        //on les récupère :
        fetch("http://localhost:3000/api/auth", options)
          //on convertit en JSON
          .then(res => {
            return res.json();
          })
          //on recup les infos user pour le mettre dans le store et data de accueil
          .then(data => {
            //si pas d'erreur on recup les infos du user :
            if (!data.error) {
              this.nom = data.nom;
              this.prenom = data.prenom;
              this.profil_image = data.profil_image;
              store.state.nom = this.nom;
              store.state.prenom = this.prenom;
              store.state.profil_image = this.profil_image;
            //si erreur
            } else {
              //on efface tout(store + session storage)
              sessionStorage.clear();
              store.state.nom = null;
              store.state.prenom = null;
              store.state.profil_image = null;
              store.state.token = null;
              store.state.userId = null;
              store.state.admin = false;
              //et on renvoi à la page de login
              router.push("/");
            }

          }).catch(err => {
            console.log(err.error);
          })
      //si déjà dans le store
      } else {
        //on met ces infos dans data de accueil
        this.nom = store.state.nom;
        this.prenom = store.state.prenom;
        this.profil_image = store.state.profil_image;
      }
    //si user n'a pas de token  
    } else {
      //on renvoie sur la page de login
      router.push("/");
    }
  }
}
</script>