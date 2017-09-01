'use strict';

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('ActionGroup', {
		id:{type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true,comment:'自动增长id' },
		action: { 
			type: DataTypes.STRING,  
			field: 'action',
			unique: true, 
			references: {
				model: 'Action',
				key: 'action'
			},
			comment:'动作名称(映射到action表)' 
		},
		groupid: { 
			type: DataTypes.BIGINT(11), 
			field: 'group_id',
			unique: true, 
			references: {
				model: 'GroupManager',
				key: 'group_id'
			},
			comment:'动作所属组id(映射到mastergroup)' 
		},
		masterid: { 
			type: DataTypes.BIGINT(11), 
			field: 'master_id',
			unique: true, 
			references: {
				model: 'master',
				key: 'id'
			},
			comment:'创建者id' 
		}
	},
	{
		timestamps: true,
		underscored: true,
    paranoid: true,
		freezeTableName: true,
		tableName: 'actiongroup',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
}
