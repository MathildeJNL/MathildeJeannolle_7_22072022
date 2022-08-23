<template>

  <header id="red-band">
    <router-link id="return" to="/accueil"><img id="group-logo" src="../assets/whitelogo.png" alt="logo entreprise"></router-link>
    <router-link class="text-nav" to="/profil" ><p class="text-pp"><img class="profil-picture logo-background-white" src="../assets/logo.png" alt="user profil picture">User Name</p></router-link>
  </header>

  <!--définir les routes-->

  <section id="main">

    <div class="publication">
      <img class="profil-picture main-profil" src="../assets/logo.png" alt="test">
      <p id="new-name"><b>NOM :</b> <input type="text" class="text" placeholder="NOM" value="NOM"></p>
      <p id="new-name"><b>Prénom :</b> <input type="text" class="text" disabled="disabled" value="Prénom"></p>
      <p id="poste-occupe"><b>Poste occupé :</b> <input type="text" class="text" placeholder="Poste occupé" value="Data Analyst"></p>
      <p class="text">Anniversaire dans xx jours</p>
      <div id="options-buttons">
      <router-link id="new-mdp-button" to="/password">Changer de mot de passe</router-link>
      <button id="suppr-button">Supprimer le compte</button>
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

.main-profil{
  height: 90px;
  width: 90px;
}

.main-info{
  font-size: 24px;
}

.text{
  line-height: 1px;
}

#group-logo {
  margin: 10px;
}

#return{
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

#options-buttons{
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  width: 90%;
}

#new-mdp-button{
  border-radius: 1px;
  border-style: solid;
  border-width: 1px;
  width: 40%;
  height: 40px;
  background-color: #4E5166;
  color: #ffff;
  font-size: 16px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  text-decoration: none;
}

#new-mdp-button:hover{
  cursor: pointer;
  background-color: #ffd7d7;
  color: black;
  border-color: #ffd7d7;
}

#suppr-button{
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

#suppr-button:hover{
  cursor: pointer;
  background-color: #ffd7d7;
  color: black;
  border-color: #ffd7d7;
}

</style>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
export default {
  name: 'Modification',
  components: { Footer }
}
</script>