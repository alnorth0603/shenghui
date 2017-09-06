/*
 * @Author:  alnorth.wang 
 * @Date:  2017-09-06 13:46:44 
 * @Last Modified by: alnorth.wang
 * @Last Modified time: 2017-09-06 17:25:12
 * @Explain:  合同信息表
 */
'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Agreement', {
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
    time_limit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '合同期限'
    },
    expire_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '合同到期时间'
    }
  }, {
      freezeTableName: false,
      tableName: 'agreement',
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
}