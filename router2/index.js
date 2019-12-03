const Router = require('koa-router')
const index = new Router()

index.get('/', async (ctx, next) => {
    ctx.response.status = 200
    // ctx.response.body = 'home'
    await ctx.render('home/index')
    await next()
})


module.exports = index