//文章类别管理
var category = {
    show: function(callback) {
        // alert(123)
        $.get(APIURLS.category_show, function(res) {
            callback(res)
        })
    }
}