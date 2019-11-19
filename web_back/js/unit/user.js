// 模块化操作
var baseUrl = 'http://localhost:8000';
var user = {
    login: function(userName, userPassword, callback) {
        $.post(baseUrl + '/admin/login', {
            user_name: userName,
            password: userPassword
        }, function(res) {
            console.log(res);
            callback(res)
        });
    },
    logout: function(callback) {
        $.post(baseUrl + '/admin/logout', function(res) {
            console.log(res);
            callback(res)
        })
    }
}