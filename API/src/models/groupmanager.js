'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('GroupManager',{
    id:{type:DataTypes.BIGINT,autoIncrement:true, primaryKey : true, unique : true, comment:'自动编号'},
    name:{type:DataTypes.STRING,allowNull: false, comment:'管理组名称' },
    info:{type:DataTypes.STRING,allowNull: false, comment:'管理组信息' },
    employee_id:{type:DataTypes.BIGINT,allowNull: false, comment:'员工编号' },
  },{
		timestamps: true,
		underscored: true,
    paranoid: true,
		freezeTableName: true,
		tableName: 'groupmanager',
		charset: 'utf8',
		collate: 'utf8_general_ci'
  })
}