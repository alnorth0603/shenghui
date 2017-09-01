'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('ActionColumn',{
    id:{type:DataTypes.BIGINT,autoIncrement:true, primaryKey : true, unique : true, comment:'自动编号'},
    name:{type:DataTypes.STRING,allowNull: false, comment:'动作分栏名称' }
  },{
		timestamps: true,
		underscored: true,
    paranoid: true,
		freezeTableName: true,
		tableName: 'actioncolumn',
		charset: 'utf8',
		collate: 'utf8_general_ci'
  })
}