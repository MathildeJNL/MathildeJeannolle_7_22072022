<template>

  <div class="home">
    
    <div id="bloc1">
      <!--lien qui ramène à la page de connexion au clic du logo-->
      <router-link id="return" to="/"><img class="group-logo" src="../assets/groupLogo.png" alt="logo entreprise"></router-link>
      
        <div id="formulaire">
          <label for="file" class="label-file">Choisir une image de profil</label>
          <input id="file" class="input-file" type="file">
          <!-- <label for="file">Ajouter une image de profil</label>
          <br>
          <input id="file" type="file"> -->
          <input class="txt" type="text" placeholder="Nom">
          <input class="txt" type="text" placeholder="Prénom">
          <input class="txt" type="text" placeholder="Poste occupé">
          <input id="date" type="date">
          <input class="txt" type="email" placeholder="Mail">
          <input class="txt" type="password" placeholder="Password">
          <button id="inscription">S'inscrire</button>
        </div>
    </div>
    
      <div id="background">
        <img id="background-img" src="../assets/entreprise.png" alt="photo de l'entreprise">
      </div>

  </div>

</template>

<style scoped>
.home{
  margin: 0;
  background-color: white!important;
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

label{
  font-size: 15px;
  font-style: italic;
  margin-top: 10px;
  margin-bottom: 10px;
}

.txt{
  padding-left: 10px;
  font-size: 15px;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  height: 45px;
  width: 72%;
  margin: 15px;
}

.home {
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #ffffff;
}

.group-logo{
  width: 40%;
  margin: 30px;
  display: flex;
  align-items: center;
}

#return{
  display: flex;
  justify-content: center;
}

#bloc1{
  width: 49%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

#formulaire{
  border-radius: 17px;
  box-shadow: 10px 15px 30px -8px #fd2b017a;
  width: 40%;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

#date{
  margin: 15px;
}

#inscription{
  margin: 20px;
  border-radius: 1px;
  border-style: solid;
  border-width: 1px;
  width: 40%;
  height: 35px;
  background-color: white;
  margin-top: 50px;
  font-size: 16px;
  text-align: center;
}

#inscription:hover{
    cursor: pointer;
    background-color: #FD2B01;
    color: #ffffff;
    border-color: #FD2B01;
}

#background{
  width: 70%;
  height: 100vh;
}

#background-img{
  object-fit: cover;
  height: 99.6%;
  width: 100%;
  position: relative;
}

@media all and (min-width: 769px) and (max-width: 1024px){

#background-img{
  display: none;
}

#background{
  display: none;
}

.group-logo{
  width: 60%;
}

#bloc1{
  width: 100%;
}

#formulaire{
  width: 60%;
}

}

@media all and (max-width: 768px){
.group-logo{
  width: 70%;
}

.txt{
  width: 70%;
  height: 23px;
}

#background-img{
  display: none;
}

#background{
  display: none;
}

#bloc1{
  width: 100%;
}

#formulaire{
  width: 80%;
}

#date{
  margin: 10px;
  height: 14px;
  font-size: 12px;
}

#inscription{
  margin-top: 30px;
}

}

</style>

<script>
// @ is an alias to /src
export default {
  name: 'Signup'
}
</script>