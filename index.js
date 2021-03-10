const config = require('config');

function sum(b) {
	const number = parseInt(config.get('number'));
  	return number + b;
}
module.exports = sum;