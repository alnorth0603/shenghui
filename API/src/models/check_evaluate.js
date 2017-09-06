/*
 * @Author:  alnorth.wang 
 * @Date:  2017-09-06 14:26:43 
 * @Last Modified by: alnorth.wang
 * @Last Modified time: 2017-09-06 15:44:15
 * @Explain:  考评信息表
 */

'use strict'

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('CheckEvaluate', {
    id: {
      type: DataTypes.BIGINT(11),
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: '考评项目'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '考评内容'
    },
    grade: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: '考评等级'
    },
    check_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '考评时间'
    },
    kh_e_id: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
      comment: '考评人编号'
    }
  }, {
      freezeTableName: false,
      tableName: 'check_evaluate',
      charset: 'utf8',
      collate: 'utf8_general_ci',
      indexes: [{
        name: 'check_evaluate_e_Id',
        method: 'BTREE',
        fields: ['kh_e_id']
      }]
    });
}