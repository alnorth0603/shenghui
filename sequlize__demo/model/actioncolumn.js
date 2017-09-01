'use strict';

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('ActionColumn', {
		action_column_id:{type:DataTypes.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true,comment:'自动增长id' },
		action_column_name: { type: DataTypes.STRING,  allowNull: false, comment:'动作分栏名称' }
	},
	{
		timestamps: true,
		underscored: true,
    paranoid: true,
		freezeTableName: true,
		tableName: 'actioncolumn',
		charset: 'utf8',
		collate: 'utf8_general_ci'
	});
}
