const userApi = require("../api/user");

module.exports = {
  user: async (ctx, next) => {
    // ctx.body = "user page";
    await ctx.render("user/user");
    await next();
  },
  login: async (ctx, next) => {
    // ctx.response.status = 200;
    // ctx.body = ctx;
    // console.log(ctx.response.status, ctx.response.status === 200)
    await ctx.render("user/login", { content: 'login page' });
    await next();
  }
  // login: async (ctx, next) => {
  //   await userApi
  //     .login(ctx.request.body)
  //     .then(res => {
  //       console.log(res);
  //       ctx.body = res;
  //       if (res.status === 200) {
  //          ctx.render("user/user");
  //       } else {
  //         ctx.render("user/login");
  //       }
  //     })
  //     .catch(err => {
  //       ctx.body = err;
  //       ctx.render("user/login");
  //     })
  //   // ctx.response.status = 200;
  //   // ctx.body = ctx;
  //   // await ctx.render("user/login");
  //   await next();
  // }
};
