const Router = require("koa-router");
const router = new Router();
const home = require("./routes/home");
const user = require("./routes/user");
// 页面路由
router.use(home.routes(), home.allowedMethods());
router.use("/user", user.routes(), user.allowedMethods());

const userApi = require("./api/user");
// API接口
router.use("/api", userApi.routes(), userApi.allowedMethods());

module.exports = router;
