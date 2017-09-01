'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Action',{
    id:{type:DataTypes.BIGINT,autoIncrement:true, primaryKey : true, unique : true, comment:'自动编号'},
    name:{type:DataTypes.STRING,allowNull: false, comment:'动作名字' },
    actioncolumn_id:{type:DataTypes.BIGINT,allowNull: false, comment:'动作分栏编号' },
    action:{type:DataTypes.STRING,allowNull: false, comment:'动作字符串' },
    viewmode:{type:DataTypes.BOOLEAN,allowNull: false,defaultValue:true,comment:'是否可见'}
  },{
		timestamps: true,
		underscored: true,
    paranoid: true,
		freezeTableName: true,
		tableName: 'action',
		charset: 'utf8',
		collate: 'utf8_general_ci'
  })
}