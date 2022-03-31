//controllers : Logique métier

//importer le model créé dans thing.js
const Thing = require("../models/thing");

//importer package node fs (filesysteme) pour acceder aux opérations du système de fichier
const fs = require("fs");

//création d'un thing
exports.createThing = (req, res, next) => {
  //supprimer l'id généré automatiquement par mongoDB
  const thingObject = JSON.parse(req.body.thing);
  delete thingObject._id;
  const thing = new Thing({
    //raccourcis de : title : req.body.title, ... :
    // title: req.body.title,
    // description: req.body.description,
    // imageUrl: req.body.imageUrl,
    // price: req.body.price,
    // userId: req.body.userId
    ...thingObject,
    //gérer l'url de facon dynamique : le protocole (http ou https), l'host, le dossier, le nom du fichier
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  thing
    //enregistre le Thing dans la base dedonnées : base de données fractionnées en collections (Things)
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

//modification d'un thing
exports.modifyThing = (req, res, next) => {
  //nouvelle images ou non ? si oui req.file si non traiter object directement
  const thingObject = req.file
    ? {
        ...JSON.parse(req.body.thing),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  Thing.updateOne(
    { _id: req.params.id },
    { ...thingObject, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

//suppression d'un thing
exports.deleteThing = (req, res, next) => {
  //vérifier que le user est bien le proprio de l'objet à suppr
  Thing.findOne({ _id: req.params.id }).then((thing) => {
    //vérifier que le user possède un thing
    if (!thing) {
      return res.status(404).json({ error: new Error("objet non trouvé") });
    }
    //vérifier que le userId du thing est bien le même que le user qui veut delete
    if (thing.userId !== req.auth.userId) {
      return res.status(401).json({
        error: new Error("Requête non autorisée"),
      });
    }
    //récupérer url de l'image pour avoir son nom et de delete
    Thing.findOne({ _id: req.params.id })
      .then((thing) => {
        const filename = thing.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Thing.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "Objet supprimé !" }))
            .catch((error) => res.status(400).json({ error }));
        });
      })
      .catch((error) => res.status(500).json({ error }));
  });
};

//get one thing
exports.getOneThing = (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(404).json({ error: error }));
};

//get all things
exports.getAllStuff = (req, res, next) => {
  Thing.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error: error }));
};
