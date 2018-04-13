var app = angular.module('ItemApp', ['ngRoute']);

app.config(function($routeProvider) {
    //route provider decides what views and controllers go together
    $routeProvider.when('/', {
        templateUrl: '/views/search.html',
        controller: 'SearchController as vm'
    }).when('/products/:_id', {
        templateUrl: '/views/products.html',
        controller: 'ProductsController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});