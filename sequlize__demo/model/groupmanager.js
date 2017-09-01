'use strict';

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('GroupManager', {
		group_id:{type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true,comment:'自动增长id' },
    group_name: { type: DataTypes.STRING,  allowNull: false, comment:'管理组名称' },
    group_info: { type: DataTypes.STRING,  allowNull: false, comment:'管理组信息' },
		master_id: { type: DataTypes.BIGINT(11), allowNull: false, comment:'创建者id' }
	},
	{
		timestamps: true,
		underscored: true,
    paranoid: true,
		freezeTableName: true,
		tableName: 'groupmanager',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
}
