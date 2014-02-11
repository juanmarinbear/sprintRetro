var retroApp = angular.module('retroApp', [
  'ngRoute',
  'ui.bootstrap',
  'retroAppControllers'
]);

retroApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      }).
      when('/reflect', {
        templateUrl: 'partials/reflect.html',
        controller: 'ReflectController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
