const Router = require("koa-router");
const index = new Router();

index.get("/index", async (ctx, next) => {
  ctx.response.status = 200;
  ctx.response.body = "index";
});

module.exports = index;
