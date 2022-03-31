# TomBoyer_CoursNode

Cours OC sur la création d'un serveur Node
utilisation FrameWork Express : 

__Build an API with nodeJS & Express

Installation :

.gitignore : node_modules

<!-- __Frontend :  -->
créer dossier front et importer le github
npm install
<!-- npm install --save-dev run-script-os` -->
npm run start

http://localhost:3000
http://localhost:4200/

!important : garder un terminal avec npm run start pour la partie Front

<!-- End__Frontend :  -->

<!-- __Backend : :  -->
créer un application Express :

créer server.js
npm init (server.js en point d'entrée)
node server / nodemon server
https://web.postman.co/workspace/Test-Server~898f3110-9e6f-4565-9b7b-fd98030c12c1/request/create?requestId=698162c9-a2d2-428f-bd49-2e41ef311c5b (vérifie que server ok)

npm install -g nodemon
nodemon server

npm install express --save
créer app.js

npm install mongoose 
créer base de données avec mongoDB

connecter base de données avec l'app

créer models
créer thing.js

créer routes
créer stuff.js

créer controllers
créer stuff.js

créer user.js

permetre user unique
npm install --save mongoose-unique-validator

créer user.js/controllers
créer user.js/router

npm install --save bcrypt

npm install --save jsonwebtoken

créer middleware
créer auth.js

npm install --save multer
créer images
créer multer-config.js
<!-- install all dependencies
mongoDB and Auth token in a .env file (not committed here) -->

<!-- End__Backend : :  -->