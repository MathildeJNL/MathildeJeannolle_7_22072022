<template>

  <header id="red-band">
    <router-link id="return" to="/accueil"><img id="group-logo" src="../assets/whitelogo.png" alt="logo entreprise"></router-link>
    <p class="text-pp"><img class="profil-picture logo-background-white" src="../assets/logo.png" alt="user profil picture">User Name</p>
  </header>

  <!-- <nav>
    <router-link class="text-nav" to="/accueil">Fil d'actualité</router-link> |
    <router-link class="text-nav" to="/newpost">Nouvelle publication</router-link>
  </nav>
  <router-view /> -->

  <section id="main">
    <div class="publication">
      <div class="profil-publication">
        <p class="text-pp"><img class="profil-picture" src="../assets/logo.png" alt="test">UserName</p>
      </div>
      <div class="picture-post">
        <label for="file" class="label-file">Ajouter un image</label>
          <input id="file" class="input-file" type="file">
        <input class="description" type="text" placeholder="Ta description">
        <button id="publier">Publier</button>
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
export default {
  name: 'NewPost',
  components: { Footer }
}
</script>