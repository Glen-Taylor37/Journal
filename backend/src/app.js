const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const config = require('../config');
const mountRoutes = require('./routes');

const passport = require('passport');
const http = require('http');

const start = async () => {
	const app = express();

	app.use(express.json());
	app.use(cors());
	app.use(morgan('combined'));
	mountRoutes(app);

	app.listen(config.PORT, () => {
		console.log(`App listening at port: ${config.PORT}`);
	});

	// const result = await db.query(`
	// 	INSERT INTO users (first_name, last_name, google_id, email)
	// 	VALUES ('Glen', '1432', 4555, 'gtaylor37@gmail.com');
	// `);

	//console.log(result);
};

module.exports = { start };
