const Router = require('koa-router')
const user = new Router()

user.get('/login', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = 'user login'
})

user.get('/user', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = 'user'
})

module.exports = user