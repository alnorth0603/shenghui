import sequelize from './../lib/sequelize'
let  Admin =  sequelize.import('./../models/admin.js')

export let GetAdminById =()=>{
  return new Promise((resolve, reject)=>{
    Admin.findOne({'where':{'id':'1'}}).then((admin)=>{
        resolve(admin);
    });
  })
}