var comment = {
    //发表评论
    postComment: function(name, content, article_id, callback) {
        $.post(APIURLS.comment_post, { name: name, content: content, article_id: id }, function(res) {
            callback(res)
        });
    },
    //获取评论
    getComment: function(article_id, callback) {
        $.get(APIURLS.comment_get, { article_id, id }, function(res) {
            callback(res)

        });
    },
}