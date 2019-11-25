var article = {
    show: function(obj, callback) {
        $.get(APIURLS.article_search, { page: obj.page, type: obj.type, state: obj.status }, function(res) {
            // console.log(res);
            console.log(obj);

            callback(res);
        })
    },
    getDetial: function(id, callback) {
        $.get(APIURLS.article_search, { id: id }, function(res) {

            callback(res);
        })
    },
    getFiveFocus: function(callback) {
        $.get(APIURLS.article_search, {
            perpage: 5,
            state: '已发布'
        }, function(res) {
            callback(res);
        })
    }
}