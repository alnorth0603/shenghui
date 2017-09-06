/*
 * @Author:  alnorth.wang 
 * @Date:  2017-09-06 14:16:13 
 * @Last Modified by: alnorth.wang
 * @Last Modified time: 2017-09-06 16:46:10
 * @Explain:  培训信息表
 */

'use strict'

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('TrainInfo', {
    id: {
      type: DataTypes.BIGINT(11),
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: '培训项目'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '培训内容'
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '开始时间'
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '结束时间'
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: '培训地址'
    },
    certificate: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: '结业证书'
    }
  }, {
      freezeTableName: false,
      tableName: 'traininfo',
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
}