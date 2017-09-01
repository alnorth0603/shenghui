'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Master',{
    id:{type:DataTypes.BIGINT,autoIncrement:true, primaryKey : true, unique : true, comment:'自动编号'},
    name:{type:DataTypes.STRING,allowNull: false, comment:'员工姓名' },
    english_name:{type:DataTypes.STRING,allowNull: true, comment:'英文名字' },
    birthday:{type:DataTypes.DATE,allowNull:false, comment:'出生日期' },
    sex:{type:DataTypes.STRING,allowNull: true, comment:'性别' },
    age:{type:DataTypes.STRING,allowNull: true, comment:'年龄' },
    native_place:{type:DataTypes.STRING,allowNull: true, comment:'籍贯' },
    politics_face:{type:DataTypes.STRING,allowNull: true, comment:'面貌' },
    phone:{type:DataTypes.STRING,allowNull: true,validate:{isInt: true,len:11}, comment:'手机号码' },
    telephone:{type:DataTypes.STRING,allowNull: true,validate:{isInt: true}, comment:'座机号码' },
    home_phone:{type:DataTypes.STRING,allowNull: true,validate:{isInt: true}, comment:'家庭电话' },
    address:{type:DataTypes.STRING,allowNull: true, comment:'现居住地' },
    home_address:{type:DataTypes.STRING,allowNull: true, comment:'家庭住址' },
    ss_account:{type:DataTypes.STRING,allowNull: true, comment:'社保账号' },
    mi_account:{type:DataTypes.STRING,allowNull: true, comment:'医保账号' },
    af_account:{type:DataTypes.STRING,allowNull: true, comment:'公积金账号' },
    lo_status:{type:DataTypes.BOOLEAN,allowNull:false,defaultValue:false, comment:'离职状态' },
    lo_reason:{type:DataTypes.TEXT,allowNull: true, comment:'离职原因' },
    lo_date:{type:DataTypes.DATE,allowNull: true, comment:'离职时间' },
    email:{type:DataTypes.STRING,allowNull: true,validate:{isEmail: true}, comment:'电子邮箱' },
    lo_date:{type:DataTypes.DATE,allowNull: true, comment:'离职时间' },
    educational:{type:DataTypes.STRING,allowNull: true, comment:'学    历' },
    formaldate:{type:DataTypes.DATE,allowNull: true, comment:'转正日期' },
    id_number:{type:DataTypes.STRING,allowNull: true, comment:'身份证号' },
    graduation_date:{type:DataTypes.DATE,allowNull: true, comment:'毕业时间' },
    profession:{type:DataTypes.STRING,allowNull: true, comment:'所学专业' },
    nation:{type:DataTypes.STRING,allowNull: true, comment:'民    族' },
    w_account:{type:DataTypes.STRING,allowNull: true, comment:'工资卡号' },
    graduate_institutions:{type:DataTypes.STRING,allowNull: true, comment:'毕业院校' },
    marital_status:{type:DataTypes.BOOLEAN,allowNull: true,defaultValue:false, comment:'婚    否' }
  },{
		timestamps: true,
		underscored: true,
    paranoid: true,
		freezeTableName: true,
		tableName: 'master',
		charset: 'utf8',
		collate: 'utf8_general_ci'
  })
}
