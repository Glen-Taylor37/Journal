const { Sequelize, DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');
const Entry = require('./entry');

const sequelize = new Sequelize(
	'postgres://postgres:postgres@localhost:5432/journals'
);

class Settings extends Model {}

Settings.init(
	{
		id        : {
			type          : DataTypes.INTEGER,
			autoIncrement : true,
			primaryKey    : true
		},
		darkTheme : {
			type         : DataTypes.BOOLEAN,
			defaultValue : false
		}
	},
	{
		sequelize,
		timestamps  : true,
		underscored : true,
		modelName   : 'Settings',
		tableName   : 'settings'
	}
);

module.exports = Settings;
