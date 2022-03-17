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

!important : garder un terminal avec npm run start pour la partie Front

<!-- End__Frontend :  -->

<!-- __Backend : :  -->
créer un application Express :

créer server.js
npm init (server.js en point d'entrée)
node server
https://web.postman.co/workspace/Test-Server~898f3110-9e6f-4565-9b7b-fd98030c12c1/request/create?requestId=698162c9-a2d2-428f-bd49-2e41ef311c5b (vérifie que server ok)

npm install -g nodemon
nodemon server

npm install express --save
créer app.js

<!-- install all dependencies
mongoDB and Auth token in a .env file (not committed here) -->

<!-- End__Backend : :  -->

<!-- {
	"Query Selector" : {
		"prefix": "queryElmnt",
		"body": ["const $1 = document.querySelector('$2');"],
		"description": "quick query select"
	},

	"Query Selector All" : {
		"prefix": "queryElmntS",
		"body": ["const $1 = document.querySelectorAll('$2');"],
		"description": "quick query select all"
	},

	"Quick function" : {
		"prefix": "functionQuick",
		"body": ["($1, $2) => { $3 }"],
		"description": "quick function =>"
	},
}


{
	"absolute-centered" : {
		"prefix" : "abs-center",
		"body" : [
			"position:absolute;",
			"top:50%;",
			"left:50%;",
			"transform:translate(-50%, -50%);"
		],
		"description": "centrage element absolute"
	},

	"flex-center": {
		"prefix" : "flex-center",
		"body" : [
			"display:flex;",
			"justify-content:center;",
			"align-items:center;"
		],
		"description": "display flex center"
	},

	"circle-basic": {
		"prefix" : "circle-basic",
		"body" : [
			"width:100px;",
			"height:100px;",
			"border-radius:50%;"
		],
		"description": "cercle simple"
	},

	"border-test": {
		"prefix" : "border-test",
		"body" : [
			"border:solid 1px black;",
		],
		"description": "border simple pour visualiser élément phase de test"
	},

	"background": {
		"prefix" : "background",
		"body" : [
			"background:#${1};",
		],
		"description": "border simple pour visualiser élément phase de test"
	},

	"media-query-tel": {
		"prefix" : "mediaTel",
		"body" : [
			"@media all and (max-width:767px){$1}",
		],
		"description": "media query pour tel"
	},

	"media-query-tablet": {
		"prefix" : "mediaTablet",
		"body" : [
			"@media all and (max-width:992px){$1}",
		],
		"description": "media query pour tablet"
	},

	"media-query-desktop": {
		"prefix" : "mediaDesktop",
		"body" : [
			"@media all and (max-width:1440px){$1}",
		],
		"description": "media query pour desktop"
	},
}



 -->