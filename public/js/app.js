var app = angular.module("app", ['ngRoute'])


.directive('myNav', function () {
    return {
        templateUrl: '../views/nav/navbar.html'
        // restrict: 'E',
        // link: function (scope, element, attr) {
        //     scope.changeColor = function () {
        //         var colors = ['#e4abab ', 'black', '#abdde4 ', '#abe4ac ', '#e4cfab '];
        //         var index = Math.floor(Math.random() * colors.length);
        //         document.querySelector('nav').style.backgroundColor = colors[index];
        //     }
        //
        // }

    }
})










.config(function ($routeProvider,$locationProvider) {
  $locationProvider.hashPrefix('');
    $routeProvider
        .when("/", {
            controller: 'homeCtrl',
            templateUrl: './views/home/home.html'
        })

    .when('/contact', {
        controller: 'contactCtrl',
        templateUrl: './views/contact/contact.html'
    })
    .when('/login', {
        controller: 'loginCtrl',
        templateUrl: './views/login/login.html'
    })

    .when('/signup', {
      controller: 'signupCtrl',
      templateUrl: './views/signup/signup.html'
    })

    .otherwise({
        redirectTo: '/'
    })
});
