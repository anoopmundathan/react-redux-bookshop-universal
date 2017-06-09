const express = require('express');
const path = require('path');

function Server(port) {
	
	this.app = express();
	this.port = port;
	
	this.app.use(express.static('public'));
	this.app.get('/', function(req, res) {
		res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
	});

	this.app.get('/api', function(req, res) {
		
		const person = [
			{
				firstname: 'Sam',
				lastname: 'Veruchiyan',
				place: 'Madrid',
				age: 29
			},
			{
				firstname: 'Ann',
				lastname: 'Mudoozwski',
				place: 'Czech',
				age: 32
			}
		]

		res.send(person);
	});
}

Server.prototype.listen = function() {

	this.app.listen(this.port, () => {
		console.log('Server running at port', this.port);
	});
}

module.exports = Server;