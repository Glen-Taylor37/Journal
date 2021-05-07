const { Sequelize, DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');
const Journal = require('./journal');
const Settings = require('./settings');

const sequelize = new Sequelize(
	'postgres://postgres:postgres@localhost:5432/journals'
);

class User extends Model {
	async comparePassword(signinPassword) {
		console.log(this.password);
		const match = await bcrypt.compare(signinPassword, this.password);
		console.log('match = ', match);
		return match;
	}
}

User.init(
	{
		id        : {
			type          : DataTypes.INTEGER,
			autoIncrement : true,
			primaryKey    : true
		},
		firstName : {
			type : DataTypes.STRING(30)
		},
		lastName  : {
			type : DataTypes.STRING(30)
		},
		googleId  : {
			type   : DataTypes.STRING(60),
			unique : true
		},
		password  : {
			type      : DataTypes.STRING(80),
			allowNull : false
		},
		email     : {
			type : DataTypes.STRING(60)
		}
	},
	{
		sequelize,
		timestamps  : true,
		underscored : true,
		modelName   : 'User',
		tableName   : 'users'
	}
);

User.hasMany(Journal, {
	foreignKey : {
		name      : 'userId',
		allowNull : false
	},
	onDelete   : 'CASCADE'
});
Journal.belongsTo(User, { foreignKey: 'userId' });

User.hasOne(Settings, {
	foreignKey : {
		name      : 'userId',
		allowNull : false,
		unique    : true
	},
	onDelete   : 'CASCADE'
});
Settings.belongsTo(User, { foreignKey: 'userId' });

User.beforeSave(async (user, options) => {
	const salt = await bcrypt.genSalt(10);

	// encrypt the password and store inside the newly created user
	const hash = await bcrypt.hash(user.password, salt);
	if (hash) {
		console.log(hash);
		user.password = hash;
	} else {
		throw new Error();
	}
});

module.exports = User;
