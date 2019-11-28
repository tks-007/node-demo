const router = require("koa-router")();
const indexController = require("../controller/index");

module.exports = app => {
  router.get("/", indexController.index);
  router.get("/info", indexController.info);
  app.use(router.routes(), router.allowedMethods());
};
