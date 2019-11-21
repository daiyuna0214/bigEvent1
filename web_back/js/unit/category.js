//文章类别管理
var baseUrl = 'http://localhost:8000';
var category = {
    show: function(callback) {
        // alert(123)
        $.get(baseUrl + '/admin/category_search', function(res) {
            callback(res)
        })
    }
}