<template>

  <header id="red-band">
    <router-link id="return" to="/accueil"><img id="group-logo" src="../assets/whitelogo.png" alt="logo entreprise"></router-link>
    <router-link class="text-nav" to="/profil" ><p class="text-pp"><img class="profil-picture logo-background-white" src="../assets/logo.png" alt="user profil picture">User Name</p></router-link>
  </header>

  <!--définir les routes-->

  <section id="main">

    <div class="publication">
      <img class="profil-picture main-profil" src="../assets/logo.png" alt="test">
      <label for="file" class="label-file">Choisir une image de profil</label>
          <input id="file" class="input-file" type="file">
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

label{
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

@media all and (min-width: 769px) and (max-width: 1024px) {

.publication{
  width: 60%;
  padding-bottom: 15px;
}
}

@media all and (max-width: 768px){
  
p{
  font-size: 11px;
}

.text-pp{
  margin: 0;
  margin-right: 5px;
}

label{
  font-size: 11px;
}

.text-nav{
  display: flex;
  align-items: center;
}

.profil-picture{
  height: 20px;
  width: 20px;
}

.main-profil{
  height: 60px;
  width: 60px;
}

.main-info{
  font-size: 15px;
}

.text{
  font-size: 11px;
}

.publication{
  margin: 0;
  width: 85%;
  margin-top: 30px;
  margin-bottom: 30px;
}

#group-logo{
  width: auto;
}

#options-buttons{
  font-size: 11px;
}

#suppr-button{
  width: 30%;
  height: 30px;
  font-size: 11px;
}

#new-mdp-button{
  width: 30%;
  height: 30px;
  text-align: center;
}

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