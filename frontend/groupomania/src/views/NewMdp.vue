<template>
    <header id="red-band">
        <router-link id="return" to="/accueil"><img id="group-logo" src="../assets/whitelogo.png" alt="logo entreprise"></router-link>
        <router-link class="text-nav" to="/profil" ><p class="text-pp"><img class="profil-picture logo-background-white" src="../assets/logo.png" alt="user profil picture">User Name</p></router-link>
    </header>

    <section id="main">
        <div id="formulaire">
            <input class="txt" type="password" placeholder="New password" id="password" required>
            <input class="txt" type="password" placeholder="Confirm Password" id="confirm_password" required>

            <button type="submit" class="pure-button pure-button-primary">Confirmer</button>
        </div>
    </section>

  <Footer :isFixed="true"></Footer>
</template>

<style scoped>
/*HEADER*/
header{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-style: none;
  background-color: #FD2D01;
  height: 6vh;
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

.logo-background-white{
  background-color: #ffff;
}

#return{
    display: flex;
    justify-content: center;
}

#group-logo {
  margin: 10px;
}

/*FORMULAIRE*/
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

.pure-button{
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

.pure-button:hover{
  cursor: pointer;
  background-color: #4E5166;
  color: white;
  border-color: #4E5166;
}

#main{
    display: flex;
    align-items: center;
    justify-content: center;
}

#formulaire{
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

</style>

<script>

// //--------PASSWORD VALIDATOR-----------
// var password = document.getElementById("password"), confirm_password = document.getElementById("confirm_password");

// function validatePassword(){
//   if(password.value != confirm_password.value) {
//     confirm_password.setCustomValidity("Passwords Don't Match");
//   } else {
//     confirm_password.setCustomValidity('');
//   }
// }

// password.onchange = validatePassword;
// confirm_password.onkeyup = validatePassword;


// @ is an alias to /src
import Footer from '@/components/Footer.vue'
export default {
  name: 'password',
  components: { Footer }
}

</script>