/*
 * @Author:  alnorth.wang 
 * @Date:  2017-09-06 13:47:30 
 * @Last Modified by: alnorth.wang
 * @Last Modified time: 2017-09-06 16:15:52
 * @Explain:  紧急联系人信息表
 */
'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('UrgentContact', {
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '姓名'
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isDecimal: true,
        len: 11
      },
      comment: '手机号码'
    },
    address: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: '现居住地'
    },
    relation: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: '关系'
    }
  }, {
      freezeTableName: false,
      tableName: 'urgent_contact',
      charset: 'utf8',
      collate: 'utf8_general_ci',
      indexes: [{
        name: 'urgent_contact_e_Id',
        method: 'BTREE',
        fields: ['employee_id']
      }]
    })
}