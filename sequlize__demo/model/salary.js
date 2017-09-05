'use strict'

module.exports = function(sequelize, DataTypes){
  return sequelize.define(Salary,{
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
    base_pay:{type:DataTypes.DECIMAL(10, 2),allowNull: false, comment:'基本工资' },
    should_pay:{type:DataTypes.DECIMAL(10, 2),allowNull: false, comment:'应发工资' },
    real_pay:{type:DataTypes.DECIMAL(10, 2),allowNull: false, comment:'实发工资' },
    deduct_pay:{type:DataTypes.DECIMAL(10, 2),allowNull: false, comment:'扣除薪资' },
    award_pay:{type:DataTypes.DECIMAL(10, 2),allowNull: false, comment:'员工奖金' },
    work_days:{type:DataTypes.FLOAT,allowNull: false, comment:'工作天数' },
    leave_days:{type:DataTypes.FLOAT,allowNull: false, comment:'请假天数' }
  },{
		timestamps: true,
		underscored: true,
    paranoid: true,
		freezeTableName: true,
		tableName: 'salary',
		charset: 'utf8',
		collate: 'utf8_general_ci'
  })
}