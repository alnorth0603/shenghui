/*
 * @Author:  alnorth.wang 
 * @Date:  2017-09-06 13:44:16 
 * @Last Modified by: alnorth.wang
 * @Last Modified time: 2017-09-06 16:46:33
 * @Explain: 请假信息表
 */


'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('LeaveInfo', {
    id: {
      type: DataTypes.BIGINT(11),
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    employee_id: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
      comment: '人员编号'
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: '请假类型(1;病假，2：年假，3：事假，4:调休，5：其他)'
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '请假原因'
    },
    leave_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '离开时间'
    },
    return_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '归来时间'
    },
    hours: {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: '请假小时数'
    }
  }, {
      freezeTableName: false,
      tableName: 'leaveInfo',
      charset: 'utf8',
      collate: 'utf8_general_ci',
      indexes: [{
        name: 'leaveInfo_e_Id',
        method: 'BTREE',
        fields: ['employee_id']
      }]
    });
}