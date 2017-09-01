'use strict';

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Action', {
		action_id:{type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true,comment:'自动增长id' },
		action_name: { type: DataTypes.STRING,  allowNull: false, comment:'动作名称' },
		action_column_id: { type: DataTypes.BIGINT(11), allowNull: true, comment:'动作分栏号(映射到actioncolumn)' },
		action: { type: DataTypes.STRING, allowNull: true, comment:'动作字符串' },
		viewmode: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true, comment:'是否可见' }
	},
	{
		timestamps: true,
		underscored: true,
    paranoid: true,
		freezeTableName: true,
		tableName: 'action',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
}
