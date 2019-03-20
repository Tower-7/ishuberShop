const Router = require('koa-router')
const Move = require('./Controllers/move')
const router = new Router()

module.exports = (app) => {
    //移动端路由
    router.get('/m',Move.index) //移动主页
    router.get('/m/detail',Move.detail) //移动主页

    app.use(router.routes()).use(router.allowedMethods())
}