var app = angular.module('app', [
  'ui.bootstrap',
  'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: '../partials/home.html'
    }).
    when('/reflect', {
      templateUrl: '../partials/reflect.html'
    });
}]);
