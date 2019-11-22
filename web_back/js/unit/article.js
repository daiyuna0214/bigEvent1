var article = {
    show: function(obj, callback) {
        $.get(APIURLS.article_search, { page: obj.page, type: obj.type, state: obj.status }, function(res) {
            // console.log(res);
            console.log(obj);

            callback(res);
        })
    }
}