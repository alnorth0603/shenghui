/*
 * @Author:  alnorth.wang 
 * @Date:  2017-09-06 13:44:58 
 * @Last Modified by: alnorth.wang
 * @Last Modified time: 2017-09-06 17:25:53
 * @Explain:   薪资表
 */
'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Salary', {
    id: {
      type: DataTypes.BIGINT(11),
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    employee_id: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
      references: {
        model: 'Employee',
        key: 'id'
      },
      comment: '人员编号'
    },
    base_pay: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: '基本工资'
    },
    leave_hours: {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: '请假小时数'
    },
    should_pay: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: '应发工资'
    },
    real_pay: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: '实发工资'
    },
    deduct_pay: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: '扣除薪资'
    },
    award_pay: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: '员工奖金'
    },
    date_of_issue: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: '下发日期'
    }
  }, {
      freezeTableName: false,
      tableName: 'salary',
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
}