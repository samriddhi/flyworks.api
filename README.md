To Install Project:
1. Open terminal and run 'npm install' ( for the first time )
2. Run mongodb (go to mongo bin and run mongodb)
3. Open terminal and run 'npm start'
4. For Dev purposes, open terminal and run "npm run-script dev"

Changes:
* Removed password for localhost database.
* Added the same again due to conflict issues .

Things to do:
* Add production datasources
* Resolve Conflicts between datasources.json, datasources.local.json, datasources.production.json



1. Open Url http://localhost:3000/explorer/ to see exposed rest APIs
2. Open Url http://localhost:3000 for web site homepage
3. Type strong-studio in parent folder to do basic addition & updation on models & datasources
4. Server Folder contains all Backend APIs and configurations.
5. Client Folder contains frontend using angular app  
6. Common Folder contains models in use for backend APIs. Their references with data sources are in server folder .
7. ejs is added as template engine in dependencies and the same is set in server.js
8. configuration like indexFile are defined in config.local.js
9. "files" field in middleware.json is pointed to client/app/ folder to load angular files. This field is used to load static content in loopback.
10. Added Dependency package of request to allow rest api calls on loopback from node.
11. Added body parser json dependency in loopback middleware.json under element named as parse.
12. Query Collection added in DB.
13. Added Utilities Folder in server.
