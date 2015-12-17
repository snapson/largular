var connect = require('connect');
var serveStatic = require('serve-static');

module.exports = connect().use(serveStatic(__dirname)).listen(8080);