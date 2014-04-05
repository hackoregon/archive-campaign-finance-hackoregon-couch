var pg = require('pg.js');
var couch = require('felix-couchdb');

var hackoregon = {};


exports = module.exports = hackoregon.Couch = function() {
  var self = this;
  self.pgdb = null;
  self.couchdb = null;
};

hackoregon.Couch.prototype.initialize = function(config, next) {
  var self = this;

  // connect to postgres
  self.pgdb = new pg.Client(config.pg.url);
  self.pgdb.connect(function (err) {
    if (err) {
      next(err, null);
    }
    
    // connect to couch
    self.couchdb = couch.createClient(config.couch.port, config.couch.host);

    next(null, self);
  });
};

hackoregon.Couch.prototype.pgQuery = function (query, next) {
  var self = this;

  self.pgdb.query(query, function(err, result) {
    if (err) {
      next(err);
    }

    next(null, result);
  });
};

hackoregon.Couch.prototype.couchSaveDoc = function (dbname, docname, doc, next) {
  var self = this;

  var cdb = self.couchdb.db(dbname);
  cdb.create(function (err) {
    cdb.saveDoc(docname, doc, function(err, ok) {
      if (err) {
        next(err);
      }
      else {
        next(null, ok);
      }
    })
  });
};
