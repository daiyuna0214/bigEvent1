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
            // console.log(res);
            callback(res)
        })
    },
    add: function(name, slug, callback) {
        $.post(APIURLS.category_add, { name: name, slug: slug }, function(res) {
            callback(res);
            console.log(res);

        })
    },
    edit: function(id, name, slug, callback) {
        $.post(APIURLS.category_edit, { id: id, name: name, slug: slug }, function(res) {
            callback(res);
        })
    }
}