const router = require("koa-router")();
const userController = require("../controller/user");

module.exports = app => {
  router.get("/user", userController.user);
  app.use(router.routes(), router.allowedMethods());
};
