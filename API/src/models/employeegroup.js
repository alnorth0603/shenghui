'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('EmployeeGroup',{
    id:{type:DataTypes.BIGINT,autoIncrement:true, primaryKey : true, unique : true, comment:'自动编号'},
    employee_id:{
      type:DataTypes.STRING,
      allowNull: false, 
			field: 'employee_id',
			unique: true, 
			references: {
				model: 'Employee',
				key: 'id'
			},
      comment:'管理员编号' 
    },
    group_id:{
      type:DataTypes.BIGINT,
      allowNull: false, 
			field: 'group_id',
			unique: true, 
			references: {
				model: 'GroupManager',
				key: 'id'
			},
      comment:'管理组编号' 
    },  
    update_employee_id:{type:DataTypes.BIGINT,allowNull: true,comment:'修改人编号'}
  },{
		timestamps: true,
		underscored: true,
    paranoid: true,
		freezeTableName: true,
		tableName: 'employeegroup',
		charset: 'utf8',
		collate: 'utf8_general_ci'
  })
}