<template>

  <header id="red-band">
    <router-link id="return" to="/poste"><img id="group-logo" src="../assets/whitelogo.png" alt="logo entreprise"></router-link>
    <p class="text-pp"><img class="profil-picture logo-background-white" src="../assets/logo.png" alt="user profil picture">User Name</p>
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
  box-shadow: 3px 3px 10px grey;
  background-color: #ffff;
  height: 30vh;
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

#modif-button{
  border-radius: 1px;
  border-style: solid;
  border-width: 1px;
  width: 40%;
  height: 35px;
  background-color: white;
  font-size: 16px;
  text-align: center;
  margin-top: 15px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: #F2F2F2;
  color: black;
}

#modif-button:hover{
  cursor: pointer;
  background-color: #FD2B01;
  color: #ffffff;
  border-color: #FD2B01;
}

</style>

<script>
// @ is an alias to /src

export default {
  name: 'Poste'
}
</script>