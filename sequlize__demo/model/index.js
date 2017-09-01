'use strict';

var sequelize=require('./_db').sequelize();

//var User = sequelize.import('./user.js');
//var UserCheckin = sequelize.import('./userCheckin.js');
//var UserAddress = sequelize.import('./userAddress.js');
//var Role = sequelize.import('./role.js');

// 建立模型之间的关系
/* User.hasOne(UserCheckin);
UserCheckin.belongsTo(User);
User.hasMany(UserAddress, {foreignKey:'user_id', targetKey:'id', as:'Address'});
User.belongsToMany(Role, {through: 'userRoles', as:'UserRoles'});
Role.belongsToMany(User, {through: 'userRoles', as:'UserRoles'}); */

var Action = sequelize.import('./action.js');
var ActionColumn = sequelize.import('./actioncolumn.js');
//var ActionGroup = sequelize.import('./actiongroup.js');
var GroupManager = sequelize.import('./groupmanager.js');
//var MasterGroup = sequelize.import('./mastergroup.js');
var Master = sequelize.import('./master.js');


GroupManager.belongsToMany(Action, {through: 'actiongroup', as:'ActionGroup'});
Action.belongsToMany(GroupManager, {through: 'actiongroup', as:'ActionGroup'});


Master.belongsToMany(GroupManager, {through: 'mastergroup', as:'MasterGroup'});
GroupManager.belongsToMany(Master, {through: 'mastergroup', as:'MasterGroup'});

ActionColumn.hasMany(Action, {foreignKey:'action_column_id', targetKey:'id', as:'ActionColumn'});


// 同步模型到数据库中
sequelize.sync();

/* exports.User = User;
exports.UserCheckin = UserCheckin;
exports.UserAddress = UserAddress;
exports.Role = Role; */
exports.Action = Action;
exports.ActionColumn = ActionColumn;
exports.Master = Master;
exports.GroupManager = GroupManager;