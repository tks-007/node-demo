const userAccountJson = require('../mock/user/account')

module.exports.login = function(data) {
    return new Promise((resolve, reject) => {
        const isTrue =  userAccountJson.some(item => {
            return item.name === data.name && item.psd === data.psd
        })
        isTrue ? resolve({...data, msg: '登录成功！', status: 200}) : reject({msg: '账号活密码错误！', status: 400})
    })
}