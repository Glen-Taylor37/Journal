const { Sequelize, DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');
const Entry = require('./entry');

const sequelize = new Sequelize(
	'postgres://postgres:postgres@localhost:5432/journals'
);

class Journal extends Model {}

Journal.init(
	{
		id    : {
			type          : DataTypes.INTEGER,
			autoIncrement : true,
			primaryKey    : true
		},
		title : {
			type : DataTypes.STRING(60)
		}
	},
	{
		sequelize,
		timestamps  : true,
		underscored : true,
		modelName   : 'Journal',
		tableName   : 'journals'
	}
);

Journal.hasMany(Entry, {
	foreignKey : {
		name      : 'journalId',
		allowNull : false
	},
	onDelete   : 'CASCADE',
	as         : 'entries'
});

Entry.belongsTo(Journal, { as: 'entries', foreignKey: 'journalId' });

module.exports = Journal;
