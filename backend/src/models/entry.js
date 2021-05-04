const { Sequelize, DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = new Sequelize(
	'postgres://postgres:postgres@localhost:5432/journals'
);

class Entry extends Model {}

Entry.init(
	{
		id        : {
			type          : DataTypes.INTEGER,
			autoIncrement : true,
			primaryKey    : true
		},
		content   : {
			type : DataTypes.STRING
		},
		createdAt : {
			type         : DataTypes.DATE,
			field        : 'created_at',
			defaultValue : Sequelize.NOW
		},
		updatedAt : {
			type         : DataTypes.DATE,
			field        : 'updated_at',
			defaultValue : Sequelize.NOW
		}
	},
	{
		sequelize,
		timestamps : false,
		modelName  : 'Entry',
		tableName  : 'entries'
	}
);

module.exports = Entry;
