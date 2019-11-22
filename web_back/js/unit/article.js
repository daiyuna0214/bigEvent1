var article = {
    show: function(callback) {
        $.get(APIURLS.article_search, function(res) {
            // console.log(res);
            callback(res);
        })
    }
}