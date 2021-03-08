const express = require('express');
const cors = require('cors');

const config = require('./config');

const start = async () => {
	const app = express();
	app.use(express.json());
	app.use(cors());

	app.listen(config.PORT, () => {
		console.log(`App listening at port: ${config.PORT}`);
	});
};

module.exports = { start };
