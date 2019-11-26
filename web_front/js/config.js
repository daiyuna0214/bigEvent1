//接口的基地址
var baseUrl = 'http://localhost:8000';
var APIURLS = {
    category_show: baseUrl + '/admin/category_search',
    category_delete: baseUrl + '/admin/category_delete',
    article_search: baseUrl + '/admin/search',
    //发表评论
    comment_post: baseUrl + '/post_comment',
    //获取评论
    comment_get: baseUrl + '/get_comments',
}