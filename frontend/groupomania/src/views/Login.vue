<template>

  <div class="home">
    
    <div id="bloc1">
      <img class="group-logo" src="../assets/groupLogo.png" alt="logo entreprise">

        <div id="formulaire">
          <input class="txt" type="email" placeholder="Mail">
          <input class="txt" type="password" placeholder="Password">
          <button @click="login" id="connexion">Connexion</button>
          <p id="inscription-txt">Première visite : <router-link id="signup" to="/signup">S'inscrire</router-link></p>
        </div>
    </div>
    
      <div id="background">
        <img id="background-img" src="../assets/entreprise.png" alt="photo de l'entreprise">
      </div>

  </div>

</template>

<style scoped>

.home{
  background-color: #ffffff;
}

input{
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    height: 45px;
    width: 72%;
    margin: 15px;
    margin-top: 50px;
}

.txt{
  padding-left: 10px;
  font-size: 15px;
}

.home {
  font-family: Lato, Arial, sans-serif;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.group-logo{
  width: 40%;
  margin: 30px;
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
  height: 45vh;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

#connexion{
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

#connexion:hover{
    cursor: pointer;
    background-color: #FD2B01;
    color: #ffffff;
    border-color: #FD2B01;
}

#inscription-txt{
  margin-top: 50px;
}

#signup{
  text-decoration: none;
  color: #FD2B01;
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

</style>

<script>
// @ is an alias to /src
export default {
  name: 'Login',
  methods: {
    login(){
      //fetch
      alert("in progress");
    }
  },
}
</script>