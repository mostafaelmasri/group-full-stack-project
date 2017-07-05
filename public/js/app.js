var app = angular.module("app", ['ngRoute'])
//
//
// .directive('myNav', function () {
//     return {
//         templateUrl: './views/templates/navbar.html'
//         // restrict: 'E',
//         // link: function (scope, element, attr) {
//         //     scope.changeColor = function () {
//         //         var colors = ['#e4abab ', 'black', '#abdde4 ', '#abe4ac ', '#e4cfab '];
//         //         var index = Math.floor(Math.random() * colors.length);
//         //         document.querySelector('nav').style.backgroundColor = colors[index];
//         //     }
//         //
//         // }
//
//     }
// })
//
//








.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: 'homeCtrl',
            templateUrl: './views/home/home.html'
        })

    // .when('/about', {
    //     controller: 'aboutController',
    //     templateUrl: './views/about/about.html'
    // })
    // .when('/contact', {
    //     controller: 'contactController',
    //     templateUrl: './views/contact/contact.html'
    // })
    //
    // .when('/playlist', {
    //   controller: 'playlistController',
    //   templateUrl: './views/playlist/playlist.html'
    // })

    .otherwise({
        redirectTo: '/'
    })
});
