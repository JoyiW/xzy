angular.module('myApp',['ngRoute'])
.controller('WelcomeController',function($scope,$route) {
    $scope.$route = $route;
})
.controller('ArticleListController', function ($scope, $route) {
    $scope.$route = $route;
})
.controller('ArticleDetailsController', function ($scope, $route) {
    $scope.$route = $route;
})
.config(function ($routeProvider) {
    $routeProvider.
    when('/',{    //跳转路径，href里内容
        templateUrl:'sayhi.html',  //显示的内容
        controller:'WelcomeController'
    }).
    when('/articleList.html', {
        templateUrl: 'articleList.html',
        controller: 'ArticleListController'
    }).
    when('/articleDetails.html', {
        templateUrl: 'articleDetails.html',
        controller: 'ArticleDetailsController'
    });
});