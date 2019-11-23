var article = {
    show: function(obj, callback) {
        $.get(APIURLS.article_search, { page: obj.page, type: obj.type, state: obj.status }, function(res) {
            // console.log(res);
            console.log(obj);

            callback(res);
        })
    },
    del: function(id, callback) {
        $.get(APIURLS.article_delete, { id: id }, function(res) {
            callback(res)
        })
    },
    // publish:function(callback){
    //     $.post()
    // }
}