const Router = require("koa-router");
const error = new Router();

error.get("/404", async (ctx, next) => {
  ctx.response.status = 404;
  ctx.response.body = "404";
});

error.get("/403", async (ctx, next) => {
  ctx.respose.status = 403;
  ctx.response.body = "403";
});

error.get("/500", async (ctx, next) => {
  ctx.response.status = 500;
  ctx.response.body = "500";
});

module.exports = error;
