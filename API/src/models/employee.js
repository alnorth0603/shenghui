/*
 * @Author:  alnorth.wang 
 * @Date:  2017-09-06 13:47:12 
 * @Last Modified by: alnorth.wang
 * @Last Modified time: 2017-09-06 17:07:07
 * @Explain:  员工信息表
 */
'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Employee', {
    id: {
      type: DataTypes.BIGINT(11),
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '姓名'
    },
    english_name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '英文名字'
    },
    birthday: {
      type: DataTypes.DATE(6),
      allowNull: false,
      comment: '生日'
    },
    sex: {
      type: DataTypes.STRING(1),
      allowNull: true,
      comment: '性别'
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '年龄'
    },
    marital_status: {
      type: DataTypes.STRING(1),
      allowNull: true,
      comment: '婚    否'
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
    telephone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isDecimal: true
      },
      comment: '座机号码'
    },
    home_phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isDecimal: true
      },
      comment: '家庭电话'
    },
    nation: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: '民    族'
    },
    native_place: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: '员工籍贯'
    },
    politics_face: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: '员工面貌'
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true,
      validate: {
        isEmail: true
      },
      comment: '电子邮箱'
    },
    educational: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: '学    历'
    },
    address: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: '现居住地'
    },
    home_address: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: '家庭住址'
    },
    ss_account: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: '社保账号'
    },
    mi_account: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: '医保账号'
    },
    af_account: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: '公积金账号'
    },
    id_number: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: '身份证号'
    },
    w_account: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: '工资卡号'
    },
    graduation_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '毕业时间'
    },
    graduate_institutions: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: '毕业院校'
    },
    entry_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '入职时间'
    },
    formaldate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '转正日期'
    },
    lo_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: '离职状态'
    },
    lo_reason: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '离职原因'
    },
    lo_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '离职时间'
    }
  }, {
      freezeTableName: false,
      tableName: 'employee',
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
}