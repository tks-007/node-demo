const Router = require('koa-router')
const router = new Router()

const userController = require('../../controller/routes/user')
// const tokenAsync = require('../../middleware/token')

router.get('/login', userController.login)

// router.get('/info', async (ctx, next) => {
//     ctx.response.status = 200
//     ctx.response.body = 'user-info'
//     // await ctx.render('home/index')
//     await next()
// })

router.get('/info/:uid', userController.user)

router.get('/task', userController.task)

module.exports = router