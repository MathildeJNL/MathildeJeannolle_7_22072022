//utilisation de regex lors de la création du MDP
module.exports = (req, res, next) => {

  const PASSWORD_REGEX_3=  /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  if (req.body.password.match(PASSWORD_REGEX_3)) {
      next();
  } else {
      //écrire la réponse avec une erreur 400 + le motif de l'erreur
        res.status(400).json({message:"Le mot de passe doit contenir 8 caractère minimum, une majuscule, un chiffre et un symbole"})
  }
};