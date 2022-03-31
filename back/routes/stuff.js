//Logique de Routing

//importer express
const express = require("express");
//créer un routeur pour implémenter des routes pour l'application
const router = express.Router();
//importer les controllers depuis controllers/stuff
const stuffCtrl = require("../controllers/stuff");
//importer controller de vérification/sécurité de route
const auth = require("../middleware/auth");
//importer multer
const multer = require("../middleware/multer-config");

//récupérer les middleware de l'app.js et remplacer par routeur.js :

//le .post permet d'intercepter les requêtes post, nous avons accès au req.body grâce à app.use(express.json()); plus haut et important de retourner une res pour éviter plantage du user :
//permettre la création d'un thing en vérifiant l'auth
router.post("/", auth, multer, stuffCtrl.createThing);

//permettre la modification d'un thing spécifique
router.put("/:id", auth, multer, stuffCtrl.modifyThing);

//permettre la suppression d'un thing spécifique
router.delete("/:id", auth, stuffCtrl.deleteThing);

//permettre de spécifier quel thing nous avons selectionné en cliquant dessus
router.get("/:id", auth, stuffCtrl.getOneThing);

//récupérer les requêtes get (objets mis en ventes sur la plateforme), on utilise find()  pour récupérer un tableau de tous les Things dans la base dedonnées
router.get("/", auth, stuffCtrl.getAllStuff);

//exporter le routeur
module.exports = router;
