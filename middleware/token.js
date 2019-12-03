const whiteList = require("../mock/whiteList");

function token() {
  return async function(ctx, next) {
      await next()
    //   token  白名单不需验证接口
    // console.log(whiteList.includes(ctx.request.url))
    // if (whiteList.includes(ctx.request.url)) {
    //   await next();
    // } else {
    //   const token = ctx.cookies.get("token");
    //   console.log(11, token);
    //   if (!token) {
    //     await ctx.redirect("/user/login");
    //   }
    //   await next()
    // }
  };
}
module.exports = token;
