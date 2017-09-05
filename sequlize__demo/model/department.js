'use strict'

module.exports = function(sequelize, DataTypes){
  return sequelize.define(Department,{
    id:{type:DataTypes.BIGINT,autoIncrement:true, primaryKey : true, unique : true, comment:'自动编号'},
    name:{type:DataTypes.STRING,allowNull: true, comment:'部门名字' }
  },{
		timestamps: true,
		underscored: true,
    paranoid: true,
		freezeTableName: true,
		tableName: 'department',
		charset: 'utf8',
		collate: 'utf8_general_ci'
  })
}