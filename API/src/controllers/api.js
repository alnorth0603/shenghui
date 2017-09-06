
import * as getUser from './../services/login.js'
//import * as dbModels from './../services/syncDB.js'

export let Get = async (ctx) => {
   await getUser.GetAdminById().then((reuslt)=>{
    ctx.body = {
      result: 'getaaa',
      name: ctx.params.name,
      para: ctx.query,
      data:reuslt
    }
  }).catch((Errors)=>{
    ctx.body = {
      result: 'getaaa',
      name: ctx.params.name,
      para: ctx.query,
      data:Errors.parent
    }
  })
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
