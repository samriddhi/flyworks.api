'use strict';
module.exports = function(app) {
  var ds = app.dataSources.db;
  ds.autoupdate('Query');
  ds.autoupdate('Video');
  ds.autoupdate('Employee');
};
