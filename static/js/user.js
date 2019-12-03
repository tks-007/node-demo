// 登录
function login() {
  const name = document.getElementById("name").value;
  const psd = document.getElementById("psd").value;
  const data = { name, psd };
  if (name === "" || psd === "") {
    layer.msg('请输入账号和密码')
    return false;
  }
  $.ajax({
    url: '/api/login',
    type: 'post',
    data,
    success: function(res) {
      if (res.status === 200) {
        layer.msg('登录成功，即将跳转！')
        setTimeout(() => {
          window.location.href = "/user/info/" + res.userInfo.id;
        }, 1000)
      }else {
        layer.msg(res.msg)
      }
    },
    fail: function(err) {
      console.log(err)
    }
  })
  // axios
  //   .post("/api/login", data)
  //   .then(res => {
  //     if (res.status === 200 && res.data.status === 200) {
  //       window.location.href = "/user/info/" + res.data.userInfo.id;
  //     } else {

  //     }
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
}

// 注销
function logout() {
  axios
    .post("/api/logout")
    .then(res => {
      window.location.href = "/user/login";
    })
    .catch(err => {
      console.log(err);
    });
}
