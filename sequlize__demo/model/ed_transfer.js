'use strict'

module.exports = function(sequelize, DataTypes){
  return sequelize.define(EDTransfer,{
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
    ndepartmentid:{
      type:DataTypes.BIGINT,
      field: 'n_department_id',
      unique: true, 
      references: {
        model: 'Department',
        key: 'id'
      },
      allowNull: false, 
      comment:'员工编号' 
    },    
    applyid:{
      type:DataTypes.BIGINT,
      field: 'apply_id',
      unique: true, 
      references: {
        model: 'Employee',
        key: 'id'
      },
      allowNull: false, 
      comment:'申请人' 
    },    
    approverid:{
      type:DataTypes.BIGINT,
      field: 'approver_id',
      unique: true, 
      references: {
        model: 'Employee',
        key: 'id'
      },
      allowNull: false, 
      comment:'批准人' 
    }
  },{
		timestamps: true,
		underscored: true,
    paranoid: true,
		freezeTableName: true,
		tableName: 'ed_transfer',
		charset: 'utf8',
		collate: 'utf8_general_ci'
  })
}