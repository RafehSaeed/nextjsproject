// Postgres stuff
var pg = require('pg'); 
const Sequelize = require('sequelize');
// Connecting to Postgres
var sequelize = null;

// Initialize the best database
function initDb(){
	
		sequelize = new Sequelize('jolt', 'postgres', 'postgres', {
		host: 'localhost',
		dialect: 'postgres',
		operatorsAliases: false,
		port: 5432,

		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		},
	});

	// Check connection established 
	sequelize
		.authenticate()
		.then(() => {
			console.log('Connection has been established successfully.');
		})
		.catch(err => {
			console.error('Unable to connect to the database:', err);
		});

	return sequelize
}

// If connection is setup return instance other wise create connection and return instance.
function getConnection(){

	if (sequelize == null){
		console.log('Initializing')
		initDb();
		return sequelize;
	}
	else{
		console.log('Already Init connection')
		return sequelize;
	}
}

module.exports = {
	getConnection: getConnection
};