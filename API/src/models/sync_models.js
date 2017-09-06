/*
 * @Author:  alnorth.wang 
 * @Date:  2017-09-06 14:43:49 
 * @Last Modified by: alnorth.wang
 * @Last Modified time: 2017-09-06 17:27:50
 * @Explain:  更新models到数据库
 */

import sequelize from './../lib/sequelize'

let Employee = sequelize.import('./employee.js')
let Admin = sequelize.import('./admin.js')
let Agreement = sequelize.import('./agreement.js')
let CheckEvaluate = sequelize.import('./check_evaluate.js')
let Department = sequelize.import('./department.js')
let LeaveInfo = sequelize.import('./leaveInfo.js')
let Resume = sequelize.import('./resume.js')
let Salary = sequelize.import('./salary.js')
let TrainInfo = sequelize.import('./trainInfo.js')
let TurnOver = sequelize.import('./turn_over.js')
let UrgentContact = sequelize.import('./urgent_contact.js')
let FileInfo = sequelize.import('./fileInfo.js')

//Employee and Admin 1:1
Employee.hasOne(Admin);  
Admin.belongsTo(Employee);

//Employee and Agreement 1:1
Employee.hasOne(Agreement);  
Agreement.belongsTo(Employee);

//Employee and CheckEvaluate N:M
Employee.belongsToMany(CheckEvaluate, {through: 'employee_agreement', as:'EmployeeCheckEvaluate'});
CheckEvaluate.belongsToMany(Employee, {through: 'employee_agreement', as:'EmployeeCheckEvaluate'});
Employee.hasMany(CheckEvaluate, {foreignKey:'kh_e_id', targetKey:'id', as:'CheckEvaluate'});

//Employee and Department 1:1
Employee.hasOne(Department);  
Department.belongsTo(Employee);

//Employee and LeaveInfo 1:N
Employee.hasMany(LeaveInfo, {foreignKey:'kh_e_id', targetKey:'id', as:'LeaveInfo'});

//Employee and CheckEvaluate N:M
Employee.belongsToMany(Resume, {through: 'employee_resume', as:'EmployeeResume'});
Resume.belongsToMany(Employee, {through: 'employee_resume', as:'EmployeeResume'});

//Employee and LeaveInfo 1:N
Employee.hasMany(Salary, {foreignKey:'employee_id', targetKey:'id', as:'Salary'});

//Employee and CheckEvaluate N:M
Employee.belongsToMany(TrainInfo, {through: 'employee_trainInfo', as:'EmployeeTrainInfo'});
TrainInfo.belongsToMany(Employee, {through: 'employee_trainInfo', as:'EmployeeTrainInfo'});

//Employee and LeaveInfo 1:N
Employee.hasMany(TurnOver, {foreignKey:'employee_id', targetKey:'id', as:'TurnOver_Employee'});
Employee.hasMany(TurnOver, {foreignKey:'approver_id', targetKey:'id', as:'TurnOver_Approver'});
Employee.hasMany(TurnOver, {foreignKey:'apply_id', targetKey:'id', as:'TurnOver_Apply'});
Department.hasMany(TurnOver, {foreignKey:'n_department_id', targetKey:'id', as:'TurnOver_N_Depart'});
Department.hasMany(TurnOver, {foreignKey:'y_department_id', targetKey:'id', as:'TurnOver_Y_Depart'});

//Employee and UrgentContact 1:N
Employee.hasMany(UrgentContact, {foreignKey:'employee_id', targetKey:'id', as:'UrgentContact'});
/*
//Agreement and FileInfo 1:N
FileInfo.hasMany(Agreement, {foreignKey:'fileInfo_id', targetKey:'id', as:'Agreement_File'});

//TrainInfo and FileInfo 1:N
FileInfo.hasMany(TrainInfo, {foreignKey:'fileInfo_id', targetKey:'id', as:'TrainInfo_File'});

// LeaveInfo and FileInfo 1:N
LeaveInfo.hasMany(FileInfo, {foreignKey:'fileInfo_id', targetKey:'id', as:'LeaveInfo_File'});
*/
// 同步模型到数据库中
sequelize.sync();

exports.Admin = Admin; 
exports.Agreement = Agreement; 
exports.CheckEvaluate = CheckEvaluate; 
exports.Department = Department; 
exports.Employee = Employee; 
exports.FileInfo = FileInfo; 
exports.LeaveInfo = LeaveInfo; 
exports.Resume = Resume; 
exports.Salary = Salary; 
exports.TrainInfo = TrainInfo; 
exports.TurnOver = TurnOver; 
exports.UrgentContact = UrgentContact; 