// 模块化操作
var baseUrl = 'http://localhost:8000';
var user = {
    login: function(userName, userPassword) {
        $.post(baseUrl + '/admin/login', {
            user_name: userName,
            password: userPassword
        }, function(res) {
            console.log(res);
            if (res.code === 400) {
                $('#msgInfo').text(res.msg)
                $('#myModal').modal('show')
                return;
            } else {
                location.href = './index.html';
            }
        });
    }
}