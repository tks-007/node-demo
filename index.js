const koa = require("koa");
const fs = require("fs");
const path = require('path')
const static  = require('koa-static')
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const app = new koa();
const router = new Router();

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
 * */
let urls = fs.readdirSync(__dirname + "/router");
urls.forEach(element => {
  let module = require(__dirname + "/router/" + element);
  router.use(module.routes(), module.allowedMethods());
});
app.use(router.routes(), router.allowedMethods());

/**
 * 次级读取路由配置
 * */
// let urls = fs.readdirSync(__dirname + '/routes')
// urls.forEach(element => {
//   let module = require(__dirname + '/routes/' + element)
//   module(app)
// })
app.use(bodyParser);
app.use(static(
  path.join(__dirname,'./static')
))

const port = 4002;
const http = "http://127.0.0.1";
app.listen(port, () => {
  console.log("Server runing at " + http + ":" + port);
});
