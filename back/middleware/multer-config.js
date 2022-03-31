//importer multer
const multer = require("multer");

//traduire l'extension
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

//créer objet de config multer : empêcher les espaces, ajouter extensions, ajouter la date
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});

//exporter en précisant qu'il s'agit d'une image
module.exports = multer({ storage: storage }).single("image");
