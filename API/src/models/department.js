/*
 * @Author:  alnorth.wang 
 * @Date:  2017-09-06 13:47:01 
 * @Last Modified by: alnorth.wang
 * @Last Modified time: 2017-09-06 17:25:27
 * @Explain:  部门信息表
 */
'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Department', {
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
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '部门代码'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '部门名字'
    }
  }, {
      freezeTableName: false,
      tableName: 'department',
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
}