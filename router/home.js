const Router = require('koa-router')
const home = new Router()

// /home
home.get('/home', async (ctx, next) => {
    ctx.response.status = 200
    // ctx.response.body = 'home'
    await ctx.render('home/index')
    await next()
})

// home/list
home.get('/list', async (ctx, next) => {
    ctx.response.status = 200
    // ctx.response.body = 'home-list'
    await ctx.render('home/index')
    await next()
})

module.exports = home