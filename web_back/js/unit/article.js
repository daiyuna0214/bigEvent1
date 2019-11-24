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
    publish: function(fd, callback) {
        $.ajax({
            url: APIURLS.article_publish,
            type: 'post',
            data: fd,
            processData: false, //不要让jQuery处理formdata数据
            contentType: false, //不要设置默认的请求头
            success: function(res) {
                callback(res)
            }
        })
    },
    getDetial: function(id, callback) {
        $.get(APIURLS.article_search, { id: id }, function(res) {

            callback(res);
        })
    },
    edit: function(fd, callback) {
        $.ajax({
            url: APIURLS.article_edit,
            type: 'post',
            data: fd,
            processData: false, //不要让jQuery处理formdata数据
            contentType: false, //不要设置默认的请求头
            success: function(res) {
                callback(res)
            }
        })
    },
    getMounthCount: function(callback) {
        $.get(APIURLS.month_article_count, function(res) {
            callback(res)
        })
    }
}