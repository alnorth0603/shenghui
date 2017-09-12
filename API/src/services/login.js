let Admin = require('../models/sync_models').Admin;
let Employee = require('../models/sync_models').Employee;

export let GetAdminInfo =(data)=>{
  return new Promise((resolve, reject)=>{
    Admin.findOne({where:{username:data.username,}})
		Employee.create({
      name:'超级管理员', 
      english_name:'admin', 
      birthday:new Date()
    }).then((result) => {
      result.setAdmin(Admin.build({username:'admin',password:'97800f2055fc627c0647ef8efdc2ef0ef1e96b2d'})).then((m_result)=>{
        resolve(m_result);
      }).catch((Errors)=>{
        reject(Errors);
      });
    }).catch((Errors)=>{
      reject(Errors);
    });
  })
}