import KoaRouter from 'koa-router'
import controllers from '../controllers/index.js'

import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

const publicKey = fs.readFileSync(path.join(__dirname, '../../publicKey.pub'))

// 用户登录的时候返回token
 let token = jwt.sign({
   userInfo: {userName:'alnorth',userId:'196903849'} // 你要保存到token的数据
 }, publicKey, { expiresIn: '7d' })

const router = new KoaRouter()

router
  .get('/public/get', function (ctx, next) {
    ctx.body = '禁止访问！'+ token;
  }) // 以/public开头则不用经过权限认证
  .all('/upload', controllers.upload.default)
  .get('/api/:name', controllers.api.Get)
  .post('/api/:name', controllers.api.Post)
  .put('/api/:name', controllers.api.Put)
  .del('/api/:name', controllers.api.Delect)
  .post('/auth/:action', controllers.auth.Post)

module.exports = router
