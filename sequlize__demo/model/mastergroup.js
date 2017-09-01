'use strict';

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('MasterGroup', {
		id:{type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true,comment:'自动增长id' },
		group_id: { 
			type: DataTypes.BIGINT(11), 
			allowNull: false, 
			comment:'管理组id(映射到group)' 
		},
		master_id: { 
			type: DataTypes.BIGINT(11), 
			allowNull: false,
			comment:'管理员id(映射到master)' 
		},
		master_id2: { type: DataTypes.BIGINT(11), allowNull: false, comment:'修改者id' }
	},
	{
		timestamps: true,
		underscored: true,
    paranoid: true,
		freezeTableName: true,
		tableName: 'mastergroup',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
}
