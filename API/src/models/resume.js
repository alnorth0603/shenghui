/*
 * @Author:  alnorth.wang 
 * @Date:  2017-09-06 13:48:16 
 * @Last Modified by: alnorth.wang
 * @Last Modified time: 2017-09-06 13:54:43
 * @Explain:  个人履历模板信息表
 */
'use strict'

module.exports = (sequelize,DataTypes) => {
  return sequelize.define('Resume',{
    id: {
      type: DataTypes.BIGINT(11),
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: '履历标题'
    },
    templet: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '履历模板'
    },
  },{
    freezeTableName: false,
    tableName: 'resume',
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
}