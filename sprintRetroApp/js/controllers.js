var retroAppControllers = angular.module('retroAppControllers', []);

retroAppControllers.controller('HomeController', ['$scope', '$http',
  function ($scope, $http) {
  }
]);

retroAppControllers.controller('ReflectController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
  }
]);


retroAppControllers.controller('ReflectAdminController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.model = { startDate: '', endDate: '' }
  }
]);

retroAppControllers.controller('DatePickerController', ['$scope',
  function ($scope) {
    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.openStart = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.openedStart = true;
    };


    $scope.openEnd = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.openedEnd = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.initDate = new Date('2016-15-20');
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
    $scope.format = $scope.formats[0];
  }
]);
