//文章类别管理
var category = {
    show: function(callback) {
        // alert(123)
        $.get(APIURLS.category_show, function(res) {
            callback(res)
        })
    },
    delete: function(id, callback) {
        $.post(APIURLS.category_delete, { id: id }, function(res) {
            console.log(res);
            callback(res)
        })
    }
}