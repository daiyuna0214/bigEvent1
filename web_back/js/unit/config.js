//接口的基地址
var baseUrl = 'http://localhost:8000';
var APIURLS = {
    user_login: baseUrl + '/admin/login',
    user_logout: baseUrl + '/admin/logout',
    user_getInfo: baseUrl + '/admin/getuser',
    category_show: baseUrl + '/admin/category_search',
    category_delete: baseUrl + '/admin/category_delete',
    category_add: baseUrl + '/admin/category_add',
    category_edit: baseUrl + '/admin/category_edit',
    article_search: baseUrl + '/admin/search',
    article_delete: baseUrl + '/admin/article_delete',
    article_publish: baseUrl + '/admin/article_publish',
    article_edit: baseUrl + '/admin/article_edit',
    month_article_count: baseUrl + '/admin/month_article_count',
}