const express = require('express');
const path = require('path');

function Server(port) {
	this.app = express();
	this.port = port;
	this.app.use(express.static('dist'));
}

Server.prototype.listen = function() {
	this.app.listen(this.port, () => {
		console.log('Server running at port', this.port);
	});
}

module.exports = Server;