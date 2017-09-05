'use strict';

module.exports = (sequelize, DataTypes) => {
	return sequelize.define('Admin', {
		id:{type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true},
		employee_id: { type: DataTypes.BIGINT(11),  allowNull: false, comment:'用户名' },
		username: { type: DataTypes.STRING,  allowNull: false, comment:'用户名' },
		password: { type: DataTypes.STRING, allowNull: false, comment:'用户密码' },
		login_flag: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true, comment:'是否正常状态' },
		create_date: { type: DataTypes.DATE, allowNull: false, comment:'用户密码' },
		update_date: { type: DataTypes.DATE, allowNull: false, comment:'用户密码' },
		last_login_date: { type: DataTypes.DATE, allowNull: false, comment:'用户密码' },
		del_flag: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true, comment:'是否正常状态' }
	},{
		timestamps: false,
		underscored: false,
    paranoid: false,
		freezeTableName: false,
		tableName: 'admin',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
}