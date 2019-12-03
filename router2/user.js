const Router = require('koa-router')
const user = new Router()
const userController = require('./../controller/user')

// user.get('/login', async (ctx, next) => {
//     ctx.response.status = 200
//     // ctx.response.body = 'user login'
//     await ctx.render('user/login', {content: ctx.request.method})
//     await next()
// })


// route
user.get('/login', userController.loginPage)
user.get('/user', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = 'user'
    await next()
})

// api
user.post('/api/login', userController.login)

module.exports = user