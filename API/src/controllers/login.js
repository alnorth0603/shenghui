import fs from 'fs'
import path from 'path'
const crypto = require("crypto")
const publicKey = fs.readFileSync(path.join(__dirname, '../../publicKey.pub'))
let Admin = require('../models/sync_models').Admin;
let Employee = require('../models/sync_models').Employee;

export let GetAdminInfo = async (ctx) => {
  let para = ctx.request.body.fields;
  let shasum  = crypto.createHmac('sha1',publicKey);
  let shasum_newPas = shasum.update(para.password).digest("hex");
  await Admin.findOne({include:[Employee],where:{username:para.username,password:shasum_newPas}}).then((data)=>{
    ctx.body = {
      success:true,
      data:data
    }
  }).catch((err)=>{
    ctx.body = {
      name: ctx.params.name,
      para: ctx.request.body,
      success:false,
      code:'H-S-001',
      reason:err,
    }
  })
}