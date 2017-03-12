Recent Changes:
* Changed routing implementation from ngRoute to ui router.
* Vimeo Integration using oembed Api and iframe.

Things to do:
* Add production datasources
* Resolve Conflicts between datasources.json, datasources.local.json, datasources.production.json
* How to move request package and urlUtitlies to middleware.json
* How to send specific data using pipe with error handling of status code
* Setup of Compose as data source.


TO READ :- 
1. Hashbang Urls :-
	https://www.quora.com/Are-hashbang-URLs-a-recommended-practice
	http://stackoverflow.com/questions/3009380/whats-the-shebang-hashbang-in-facebook-and-new-twitter-urls-for
	https://developers.google.com/webmasters/ajax-crawling/docs/learn-more
2. Vimeo APIs	


LOCAL SETUP :-
# Open terminal and run 'npm install' ( for the first time )
# Run mongodb in another terminal. 
# Create flyworksDB and a user named developer with pass california.
	Mongo Commands -
		use flyworks;
		db.createUser({ user: "developer", pwd: "california", roles: [{ role: "dbOwner", db: "flyworks" }] });
# Execute "npm run-script dev" on terminal. App starts using nodemon.
# Open Url http://localhost:3000/explorer/ to see exposed rest APIs.
# Visit http://localhost:3000 for web site homepage.


DATA SOURCE & MODEL CONFIGURATION :-
This can be done in two ways :-
1. Terminal - Read https://loopback.io/doc/en/lb3/Command-line-tools.html
2. Browser UI - Run strong-studio on terminal.  Opens an application in UI. Sign up using username & password (for first time).

DESCRIPTION :-
# Server Folder contains all Backend APIs and configurations.
# Client Folder contains frontend using angular app  
# Common Folder contains model files to define their schema. Their references with data sources are in server folder .
# ejs is added as template engine in dependencies and the same is set in server.js
# Configuration like indexFile are defined in config.local.js
# "files" field in middleware.json is pointed to client/app/ folder to load angular files. This field is used to load static content in loopback.
# Added request package to call rest apis from node.
# Added body parser json dependency in loopback middleware.json under element named as parse.
# Added Utilities Folder in server.
# Service folder for factory & services.
# app.config.js - Angular Site routes with respective controllers and views.
# ui router used instead of ngRoute for angular routing.



ACCOUNT CREDENTIALS:-

1. Gmail :- 
	Username - flyworksmedia
	Password - california@12

2. Vimeo :- 
	Username - flyworksmedia
	Password - california@12

3. Local Mongo :- 
	Username - developer
	Password - california@12