const { Sequelize, DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = new Sequelize(
	'postgres://postgres:postgres@localhost:5432/journals'
);

class Entry extends Model {}

Entry.init(
	{
		id      : {
			type          : DataTypes.INTEGER,
			autoIncrement : true,
			primaryKey    : true
		},
		content : {
			type : DataTypes.STRING
		}
	},
	{
		sequelize,
		timestamps  : true,
		underscored : true,
		modelName   : 'Entry',
		tableName   : 'entries'
	}
);

module.exports = Entry;
