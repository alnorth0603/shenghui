'use strict'

module.exports = function(sequelize, DataTypes){
  return sequelize.define(UrgentContact,{
    id:{type:DataTypes.BIGINT,autoIncrement:true, primaryKey : true, unique : true, comment:'自动编号'},
    employeeid:{
      type:DataTypes.BIGINT,
      field: 'employee_id',
      unique: true, 
      references: {
        model: 'Employee',
        key: 'id'
      },
      allowNull: false, 
      comment:'员工编号' 
    },
    name:{type:DataTypes.STRING,allowNull: true, comment:'联系人姓名' },
    phone:{type:DataTypes.STRING,allowNull: true,validate:{isInt: true,len:11}, comment:'手机号码' },
    address:{type:DataTypes.STRING,allowNull: true, comment:'联系人姓名' },
    relation:{type:DataTypes.STRING,allowNull: true, comment:'关系' }
  },{
		timestamps: true,
		underscored: true,
    paranoid: true,
		freezeTableName: true,
		tableName: 'urgent_contact',
		charset: 'utf8',
		collate: 'utf8_general_ci'
  })
}