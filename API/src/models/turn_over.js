/*
 * @Author:  alnorth.wang 
 * @Date:  2017-09-06 14:07:21 
 * @Last Modified by: alnorth.wang
 * @Last Modified time: 2017-09-06 16:11:05
 * @Explain:  人事变动信息表
 */
'use strict'

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('TurnOver', {
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
    y_department_id: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
      comment: '原部门'
    },
    n_department_id: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
      comment: '现部门'
    },
    apply_id: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
      comment: '申请人'
    },
    approver_id: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
      comment: '批准人'
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '变动原因'
    }
  }, {
      freezeTableName: false,
      tableName: 'turn_over',
      charset: 'utf8',
      collate: 'utf8_general_ci',
      indexes: [{
        name: 'turn_over_e_Id',
        method: 'BTREE',
        fields: ['employee_id']
      },{
        name: 'turn_over_approver_Id',
        method: 'BTREE',
        fields: ['approver_id']
      },{
        name: 'turn_over_apply_Id',
        method: 'BTREE',
        fields: ['apply_id']
      },{
        name: 'turn_over_y_department_id',
        method: 'BTREE',
        fields: ['y_department_id']
      },{
        name: 'turn_over_n_department_id',
        method: 'BTREE',
        fields: ['n_department_id']
      }]
    });
}