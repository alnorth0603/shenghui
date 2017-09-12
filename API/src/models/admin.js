/*
 * @Author:  alnorth.wang 
 * @Date:  2017-09-06 13:46:11 
 * @Last Modified by: alnorth.wang
 * @Last Modified time: 2017-09-06 17:34:42
 * @Explain:   登陆信息表
 */
'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Admin', {
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
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true
      },
      comment: '用户名'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true
      },
      comment: '用户密码'
    },
    login_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: '是否正常状态'
    },
    last_login_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '最后登陆时间'
    }
  }, {
    freezeTableName: false,
    tableName: 'admin',
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
}