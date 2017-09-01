'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('ActionGroup',{
    id:{type:DataTypes.BIGINT,autoIncrement:true, primaryKey : true, unique : true, comment:'自动编号'},
    action:{ 
			type: DataTypes.STRING, 
			field: 'action',
			unique: true, 
			references: {
				model: 'Action',
				key: 'action'
			},
			comment:'动作名字' },
    group_id:{ 
			type: DataTypes.BIGINT, 
			field: 'group_id',
			unique: true, 
			references: {
				model: 'GroupManager',
				key: 'id'
			},
      comment:'动作组编号' 
    },
    employee_id:{ 
			type: DataTypes.BIGINT, 
			field: 'employee_id',
			unique: true, 
			references: {
				model: 'Employee',
				key: 'id'
			},
      comment:'员工编号' 
    }
  },{
		timestamps: true,
		underscored: true,
    paranoid: true,
		freezeTableName: true,
		tableName: 'actiongroup',
		charset: 'utf8',
		collate: 'utf8_general_ci'
  })
}