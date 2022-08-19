<template>

  <header id="red-band">
    <img id="group-logo" src="../assets/whitelogo.png" alt="logo entreprise">
  </header>

  <!--définir les routes-->
  <nav>
    <router-link class="text-nav" to="/poste">Fil d'actualité</router-link> |
    <router-link class="text-nav" to="/newpost">Nouvelle publication</router-link>
  </nav>
  <router-view />

  <section id="main">
    <div class="publication">
      <div class="profil-publication">
        <p class="text-pp"><img class="profil-picture" src="../assets/logo.png" alt="test">UserName</p>
      </div>
      <div class="picture-post">
        <label for="file" class="label-file">Ajouter un image</label>
          <input id="file" class="input-file" type="file">
        <input class="description" type="text" placeholder="Ta description">
      </div>
      <button id="publier">Publier</button>
    </div>

  </section>

</template>

<style scoped>

label{
  font-size: 15px;
  font-style: italic;
  margin-bottom: 10px;
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
  box-shadow: 3px 3px 10px grey;
  background-color: #ffff;
  height: 15vh;
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
  margin-left: 10px;
  object-fit: cover;
}

.text-pp {
  display: flex;
  align-items: center;
}

.picture-post{
    display: flex;
    flex-direction: column;
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
  width: 15%;
  margin: 10px;
}

#main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* #publier{
        display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    justify-content: center;
} */
</style>

<script>
// @ is an alias to /src

export default {
  name: 'Poste'
}
</script>