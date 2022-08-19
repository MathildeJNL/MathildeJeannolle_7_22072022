const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

//crée application Express
const app = express();

//routes vers user, postes et commentaires
const posteRoutes = require('./routes/poste');
const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/commentaire');
const coeurRoutes = require('./routes/coeur');

const db = require("./models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////  CORS CONFIGURATION /////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

//middleware général : s'applique à toutes les routes-requêtes envoyées au serveur
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cross-Origin-Resource-Policy', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));


//Importe 
app.use('/api/poste', posteRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/commentaire', commentRoutes);
app.use('/api/coeur', coeurRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

//exporter l'appli/constante pour y accéder depuis les autres fichiers du projet notamment le serveur NODE
module.exports = app;