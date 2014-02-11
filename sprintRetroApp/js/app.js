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
      when('/admin', {
        templateUrl: 'partials/reflectAdmin.html',
        controller: 'ReflectAdminController'
      }).
      when('/sprint', {
        templateUrl: 'partials/sprint.html',
        controller: 'SprintController'
      }).
      when('/topic', {
        templateUrl: 'partials/topic.html',
        controller: 'TopicController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
