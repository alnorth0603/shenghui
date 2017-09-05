
import * as getUser from './../services/login.js'

export let Get = async (ctx) => {
  await getUser.GetAdminById().then((reuslt)=>{
    ctx.body = {
      result: 'getaaa',
      name: ctx.params.name,
      para: ctx.query,
      data:reuslt
    }
  })
   /*await Admin.findOne({'where':{'id':'1'}}).then(function(admin){
    ctx.body = {
      result: 'get',
      name: ctx.params.name,
      para: ctx.query,
      data:admin
    }
});
  ctx.body = {
    result: 'get',
    name: ctx.params.name,
    para: ctx.query,
    data:''+adminInfo
  }*/
}

export let Post = async (ctx) => {
  ctx.body = {
    result: 'post',
    name: ctx.params.name,
    para: ctx.request.body
  }
}

export let Put = (ctx) => {
  ctx.body = {
    result: 'put',
    name: ctx.params.name,
    para: ctx.request.body
  }
}

export let Delect = (ctx) => {
  ctx.body = {
    result: 'delect',
    name: ctx.params.name,
    para: ctx.request.body
  }
}
