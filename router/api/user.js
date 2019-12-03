const Router = require("koa-router");
const router = new Router();
// const userAccountJson = require("../../mock/user/account");
const userApi = require('../../controller/api/user')

// router.post("/login", async (ctx,next) =>  {
//     const data = ctx.request.body
//     const hasUserInfo = userAccountJson.some(item => {
//         return item.name === data.name && item.psd === data.psd;
//       });
//       let userinfo = {};
//       if (hasUserInfo) {
//         userinfo = userAccountJson.filter(item => {
//           return item.name === data.name && item.psd === data.psd;
//         })[0];
//       }
//       const result = hasUserInfo
//         ? {
//             msg: "登录成功！",
//             status: 200,
//             userInfo: { ...userinfo }
//           }
//         : {
//             msg: "用户名或密码错误！",
//             status: 400
//           };
//       ctx.body = result;
// });


router.post("/login", async (ctx,next) =>  {
    userApi.login(ctx)
    await next()
});

router.post('/logout', async (ctx,next) => {
    userApi.logout(ctx)
    await next()
})

module.exports = router;
