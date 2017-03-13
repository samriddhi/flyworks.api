 'use strict';
 module.exports = function(app) {
     var Vimeo = require('vimeo').Vimeo;
     
     var CLIENT_ID = '4f57bfff51c3a5c35e14235d2625db3047e10de5';
     var CLIENT_SECRET = '7nMRiSQ/v6m0pvcwkgFJGD+pCkGLH9iybB3g3iB6K8C3idB77DFGYQxzh8TlQN/JZbMJO2DC3tdUjQisGOkbqdAFSDD7NQ1a2GIBDgr05+SbPndy04AI6gIIVr9go8He';
     var ACCESS_TOKEN = '261f981e9fb71c75346e7bd619cb7e8f';

     var lib = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);

     lib.request( /*options*/ {         
     	/* Path of all videos of flyworks */
         path: '/me/videos/'
     }, /*callback*/ function(error, body, status_code, headers) {
         if (error) {
             console.log('error');
             console.log(error);
         } else {
             console.log('body');
             console.log(body);
         }

         console.log('status code');
         console.log(status_code);
     });
 };