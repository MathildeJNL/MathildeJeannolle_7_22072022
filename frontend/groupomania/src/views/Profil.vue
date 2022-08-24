<template>

  <header id="red-band">
    <router-link id="return" to="/accueil"><img id="group-logo" src="../assets/whitelogo.png" alt="logo entreprise">
    </router-link>
    <div id="bloc-header-right">
      <router-link class="text-nav" to="/newpost">
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <span class="material-symbols-outlined add">add</span>
      </router-link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <span class="material-symbols-outlined logout">logout</span>
      <p class="text-pp"><img class="profil-picture logo-background-white" src="../assets/logo.png" alt="user profil picture">User Name</p>
    </div>
  </header>

  <!--définir les routes-->

  <section id="main">

    <div class="publication">
      <img class="profil-picture main-profil" src="../assets/logo.png" alt="test">
      <p class="text main-info">NOM - Prénom</p>
      <p class="text">Data Analyst</p>
      <p class="text">Anniversaire dans xx jours</p>
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

@media all and (max-width: 768px){
  
p{
  font-size: 11px;
}

.logout{
  font-size: 20px;
}

.add{
  font-size: 20px;
}

.text-pp{
  font-size: 10px;
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

.publication{
  margin: 0;
  width: 85%;
  margin-top: 30px;
  margin-bottom: 30px;
}

#group-logo{
  width: auto;
}

#modif-button{
  width: 35%;
  height: 20px;
  font-size: 11px;
}

}
</style>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
export default {
  name: 'Profil',
  components: { Footer }
}
</script>