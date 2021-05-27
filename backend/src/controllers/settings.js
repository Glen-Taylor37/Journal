const Settings = require('../models/settings');
const { Sequelize } = require('sequelize');

exports.getSettings = async (req, res, next) => {
	try {
		let settings = await Settings.findOne({
			where : { userId: req.user.id }
		});
		if (!settings) {
			settings = await Settings.create({ userId: req.user.id });
		}

		res.json(settings.toJSON());
	} catch (error) {
		return res.status(422).send('Could not get user settings');
	}
};

exports.createSettings = async (req, res, next) => {
	try {
		const newSettings = await Settings.create({ userId: req.user.id });
		res.json(newSettings.toJSON());
	} catch (error) {
		return res.status(422).send('Could not create user settings');
	}
};

exports.updateSettings = async (req, res, next) => {
	try {
		const settings = await Settings.findOne({
			where : { userId: req.user.id }
		});
		if (settings) {
			const update = await settings.update({
				...req.body.settings
			});
			console.log('settings: ', update);
			res.json(update.toJSON());
		}
	} catch (error) {
		console.log(error);
		return res.status(422).send('Could not update user settings');
	}
};
