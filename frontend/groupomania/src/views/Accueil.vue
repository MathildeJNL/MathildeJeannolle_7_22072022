<template>

  <header id="red-band">
    <img id="group-logo" src="../assets/whitelogo.png" alt="logo entreprise">
  <div id="bloc-header-right">
    <router-link class="text-nav" to="/newpost">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <span class="material-symbols-outlined add">add</span>
    </router-link>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <span class="material-symbols-outlined logout">logout</span>
    <router-link class="text-nav" to="/profil" ><p class="text-pp"><img class="profil-picture logo-background-white" src="../assets/logo.png" alt="user profil picture">User Name</p></router-link>
  </div>
   
  </header>

  <!--définir les routes-->
  <!-- <nav>
    <router-link class="text-nav" to="/poste">Fil d'actualité</router-link> |
    <router-link class="text-nav" to="/newpost">Nouvelle publication</router-link>
  </nav>
  <router-view /> -->

  <section id="main">
    <div class="publication">
      <div class="profil-publication">
        <p class="text-pp"><img class="profil-picture" src="../assets/human1.jpg" alt="test">UserName1</p>
        <div id="modification-icon">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0" />
          <span class="material-symbols-outlined trash">delete</span>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
          <span class="material-symbols-outlined edit">edit</span>
        </div>
      </div>
      <div class="picture-post">
        <img class="pict" src="../assets/entreprise.png" alt="test">
        <div id="empty-heart">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0" />
          <span class="material-symbols-outlined favorite">favorite</span> <span class="heart-number">10</span>
        </div>
        <p class="description">Une superbe description</p>
        <p class="description">18/08/22 - 22h03</p>
        <!--ajouter le stylo pour la modification du post-->
      </div>
      <hr>
      <div class="commentaires">
        <div class="comments">
          <p class="user-id-comment"><img class="profil-picture" src="../assets/logo.png" alt="test">UserName a écrit (22.08.2022, 14:41) :</p>
          <p class="comment">un commentaire</p>

          <p class="user-id-comment"><img class="profil-picture" src="../assets/human1.jpg" alt="test">UserName1 a écrit (22.08.2022, 14:50) :</p>
          <p class="comment">un nouveau commentaire</p>
        </div>
        <hr>
        <div id="main-new-comment">
          <img class="profil-picture" src="../assets/human1.jpg" alt="test">
          <input type="text" name="commentaire" id="new-comment" placeholder="Ajouter un commentaire">
        </div>

      </div>
    </div>

    <!-- <div class="publication">
      <div class="profil-publication">
        <p class="text-pp"><img class="profil-picture" src="../assets/logo.png" alt="test">UserName</p>
        <div id="modification-icon">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0" />
          <span class="material-symbols-outlined trash">delete</span>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
          <span class="material-symbols-outlined edit">edit</span>
        </div>
      </div>
      <div class="picture-post">
        <img class="pict" src="../assets/logo.png" alt="test">
        <div id="empty-heart">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0" />
          <span class="material-symbols-outlined">favorite</span>
        </div>
        <p class="description">Une superbe description</p>
        <p class="description">18/08/22 - 22h03</p>

      </div>
      <hr>
      <div class="commentaires">
        <div class="comments">
          <p class="user-id-comment"><img class="profil-picture" src="../assets/logo.png" alt="test">UserName a écrit (23.08.2022, 04:41) :</p>
          <p class="comment">un commentaire</p>

          <p class="user-id-comment"><img class="profil-picture" src="../assets/human1.jpg" alt="test">UserName1 a écrit (23.08.2022, 09:02) :</p>
          <p class="comment">un nouveau commentaire</p>
        </div>
        
        <img class="profil-picture" src="../assets/human1.jpg" alt="test">
        <input type="text" name="commentaire" id="new-comment" placeholder="Ajouter un commentaire">
      </div>
    </div> -->
  </section>

  <Footer>
  </Footer>

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

/* nav {
  border-style: none;
  background-color: #FFD7D7;
  height: 50px;
  display: flex;
  justify-content: center;
  font-size: 17px;
  align-items: center;
} */

hr{
  width: 50%;
}

.logo-background-white{
  background-color: #ffff;
}

.text-nav {
  text-decoration: none;
  color: black;
}

.publication {
  border-radius: 10px;
  width: 25%;
  margin: 60px;
  box-shadow: 12px 15px 40px #ffd7d7;
  background-color: #ffff;
}

.profil-publication{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.trash{
  margin-right: 15px;
}

.trash:hover{
  cursor: pointer;
  color: #FD2D01;
}

.edit{
  margin-right: 15px;
}

.edit:hover{
  color: #4E5166 !important;
  cursor: pointer;
}

.add{
  font-variation-settings:
  'FILL' 0,
  'wght' 700,
  'GRAD' 200,
  'opsz' 48 ;
  font-size: 35px;
}

.add:hover{
  color: #ffff !important;
  cursor: pointer;
}

.logout{
  font-variation-settings:
  'FILL' 0,
  'wght' 700,
  'GRAD' 200,
  'opsz' 48 ;
  font-size: 30px;
}

.logout:hover{
  cursor: pointer;
  color: #ffff !important;
}

/*au lieu du hover ce sera au click du coeur*/
.material-symbols-outlined:hover {
  font-variation-settings:
  'FILL' 1,
  'wght' 300,
  'GRAD' 0,
  'opsz' 48;
  color: #FD2D01;
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

.pict {
  position: relative;
  width: 100%;
  height: 20vh;
  object-fit: contain;
}

.description{
  margin-left: 10px;
}

.user-id-comment{
  display: flex;
  align-items: center;
}

.commentaires{
  margin-left: 10px;
  margin-bottom: 40px;
}

/* #red-band {
  border-style: none;
  background-color: #FD2D01;
  height: 6vh;
} */

#group-logo {
  width: 10%;
  margin: 10px;
}

#bloc-header-right{
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

#empty-heart{
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
}

#new-comment{
  border-radius: 5px;
  font-size: 15px;
  font-style: italic;
  border: 1px solid #f2f2f2;
  width: 65%;
}

#main-new-comment{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin-top: 20px;
}
</style>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
export default {
  name: 'Accueil',
  components: { Footer }
}
</script>