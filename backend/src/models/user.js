const { Sequelize, DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');

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
			type  : DataTypes.STRING(30),
			field : 'first_name'
		},
		lastName  : {
			type  : DataTypes.STRING(30),
			field : 'last_name'
		},
		googleId  : {
			type   : DataTypes.STRING(60),
			unique : true,
			field  : 'google_id'
		},
		password  : {
			type      : DataTypes.STRING(80),
			allowNull : false
		},
		email     : {
			type : DataTypes.STRING(60)
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
		modelName  : 'User',
		tableName  : 'users'
	}
);

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
