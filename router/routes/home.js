const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {
    ctx.response.status = 200
    // ctx.response.body = 'home'
    await ctx.render('home/index')
    await next()
})

router.get('/list', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = 'home-list'
    // await ctx.render('home/index')
    await next()
})

module.exports = router