// 模块化操作
var user = {
    login: function(userName, userPassword, callback) {
        $.post(APIURLS.user_login, {
            user_name: userName,
            password: userPassword
        }, function(res) {
            console.log(res);
            callback(res)
        });
    },
    logout: function(callback) {
        $.post(APIURLS.user_logout, function(res) {
            console.log(res);
            callback(res)
        })
    },
    getInfo: function(callback) {
        $.get(APIURLS.user_getInfo, function(res) {
            callback(res)
        })
    }
}