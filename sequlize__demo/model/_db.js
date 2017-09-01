'use strict';

var Sequelize = require('sequelize');

exports.sequelize = function () {
	return new Sequelize('modelTest', 'root', '196903849', {host: 'localhost', port:3306, logging:console.log});
}
