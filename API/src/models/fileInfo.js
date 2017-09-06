/*
 * @Author:  alnorth.wang 
 * @Date:  2017-09-06 14:38:23 
 * @Last Modified by: alnorth.wang
 * @Last Modified time: 2017-09-06 16:45:39
 * @Explain:  文件信息表
 */

'use strict'

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('FileInfo', {
    id: {
      type: DataTypes.BIGINT(11),
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: '文件名字'
    },
    extend_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: '文件后缀'
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '文件备注'
    },
    down_url: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: '下载地址'
    },
    size: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: '文件大小'
    },
    addach_id: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      comment: '关联表中的编号（表名+编号）'
    },
  }, {
      freezeTableName: false,
      tableName: 'fileinfo',
      charset: 'utf8',
      collate: 'utf8_general_ci',
      indexes: [{
        name: 'fileInfo_addach_id',
        method: 'BTREE',
        fields: ['addach_id']
      }]
    });
}