const koa = require("koa");
// const fs = require("fs");
const path = require("path");
const static = require("koa-static");
// const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const views = require("koa-views");

const app = new koa();
// const router = new Router();
const routes = require("./router");
// app.use(routes.routes(), routes.allowedMethods())

const loggerAsync = require("./middleware/log");
const routesAsync = require("./middleware/routes");
const tokenAsync = require('./middleware/token')
app.use(tokenAsync())
//引用在路由之前
app.use(static(path.join(__dirname, "./static")));
app.use(views(path.join(__dirname, "./views"), { map: { html: "ejs" } }));
app.use(bodyParser());
// app.use(
//   views(path.join(__dirname, "./views"), {
//     extension: "ejs"
//   })
// );

// 放置静态文件以及模板之后
app.use(routes.routes()).use(routes.allowedMethods());

// const index = require("./router");
// const home = require("./router/home");
// router.use(home.routes(), home.allowedMethods());
/**
 * 路由配置 代码冗余
 */
// app.use(router.routes(), router.allowedMethods());
// app.use(index.routes(), index.allowedMethods())
// app.use(home.routes(), home.allowedMethods())

/**
 * 完美读取路由配置
 * 省略一个个配置子路由
 * */
// let urls = fs.readdirSync(__dirname + "/router2");
// urls.forEach(element => {
//   let module = require(__dirname + "/router2/" + element);
//   router.use(module.routes(), module.allowedMethods());
// });
// app.use(router.routes(), router.allowedMethods());

/**
 * 次级读取路由配置
 * 子路由配置代码有点冗余
 * */
// let urls = fs.readdirSync(__dirname + '/router1')
// urls.forEach(element => {
//   let module = require(__dirname + '/router1/' + element)
//   module(app)
// })

// 中间件使用
app.use(loggerAsync()).use(routesAsync())

const port = 4002;
const http = "http://127.0.0.1";
app.listen(port, () => {
  console.log("Server runing at " + http + ":" + port);
});
