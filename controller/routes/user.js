// const userAccountJson = require("../../mock/user/account");
const userApi = require("../api/user");

module.exports.login = async function(ctx) {
  await ctx.render("user/login", { content: "login page1 sss", title: "登录" });
};

module.exports.user = async function(ctx, next) {
  // 异步请求加页面渲染
  const result = userApi.getUserInfo(ctx);
  await ctx.render("user/user", {
    userInfo: result.userinfo,
    title: "用户信息"
  });
  await next();
};

module.exports.task = async function(ctx, next) {
//   console.log(ctx.cookies.get("token"));
  ctx.body = "task";
  await next();
};
