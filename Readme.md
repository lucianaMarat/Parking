<H1>Presentation</H1>


Exemple d'API Nodejs Rest utilisant ExpressJS et Mysql
J'ai créé  un systeme de gestion de parking en utilisant la base de données mysql.J'ai ajouté les fonctionnalités suivantes dans ce code source,
Ajouter utilisateur ou une place de parking dans la base de données mysql
Modifier les données du user dans la base de données mysql
Annuler la reservation d'une place de parking
j'utilise mysql2 , sequelize pour connectée a ma db et me permet de faire mes tables

avant toute chose n'oublie pas de verifier si npm est initialisé sur votre projet

npm init  ou 
npm install 

Vous devez créer une base de données «managerParking» dans mysql 
creer les models :
npx sequelize model:generate --name users/spaces --attributes (ex= name:string)

dans le cas ou il y'a une erreur persistante vous pouvez forcer la commande avec --force 

puis creer les tables

npx sequelize db:migrate

Comment exécuter l'application nodejs
verifiez que nodeon est bien installé puis lancer la commande suivante

npm run start

si ça ne fonctionne pas vérifier que vous avez bien mit dans le fichier package.json
au niveau du script
"start":"nodemon app.js"

ce qui est cool avec nodemon c'est que vous n'aurez plus besoin de vous déconnectez et reconnectez a chaque fois que vous faites des modifications 

