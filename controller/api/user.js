const userAccountJson = require("../../mock/user/account");
const jwt = require("jsonwebtoken");

// 登录
module.exports.login = function(ctx) {
  const data = ctx.request.body;
  const hasUserInfo = userAccountJson.some(item => {
    return item.name === data.name && item.psd === data.psd;
  });
  let userinfo = {};
  if (hasUserInfo) {
    userinfo = userAccountJson.filter(item => {
      return item.name === data.name && item.psd === data.psd;
    })[0];
  }
  const result = hasUserInfo
    ? {
        msg: "登录成功！",
        status: 200,
        userInfo: { ...userinfo }
      }
    : {
        msg: "用户名或密码错误！",
        status: 400
      };
  if (hasUserInfo) {
    const secret = Math.random().toString(36);
    const payload = userinfo;
    const token = jwt.sign(payload, secret, { expiresIn: "2h" });
    ctx.cookies.set("token", token);
  }
  ctx.body = result;
};

// 查询用户信息
module.exports.getUserInfo = function(ctx) {
  const uid = Number(ctx.params.uid);
  const userInfo = userAccountJson.filter(item => item.id === uid)[0];
  const result = userInfo
    ? {
        msg: "查询成功！",
        status: 200,
        userinfo: { ...userInfo }
      }
    : {
        msg: "账号不存在！",
        status: 400
      };
  return result;
};

// 用户注销
module.exports.logout = function(ctx) {
  ctx.cookies.set("token", "", {
    maxAge: 0
  });
  ctx.body = {
    msg: "注销成功！",
    status: 200
  };
};
