var myAppModule = angular.module('myApp',['ui.router']);

myAppModule.config(function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home',{
      url:'/home',
      templateUrl:'views/partial-home.html',
      controller: function($scope,$state) {
        $scope.aboutUs = function() {
          $state.go('aboutus');
        }
      }
    })
    .state('home.list',{
      url: '/list',
      templateUrl: 'views/partial-home-list.html',
      controller: function($scope) {
        $scope.names = ['Item - 1','Item - 2','Item - 3'];
      }
    })
    .state('home.paragraph',{
      url: '/paragraph',
      templateUrl: 'views/partial-home-para.html',
      controller: function($scope) {
        $scope.paragraph = "This is a sample paragraph"
      }
    })
    .state('home.paragraph.paraList',{
      url: '/list',
      templateUrl: 'views/partial-home-paraList.html',
      controller: function($scope) {
        $scope.names = ['Item - 1','Item - 2','Item - 3'];
      }
    })
    .state('aboutus',{
      url: '/aboutus',
      templateUrl: 'views/partial-about.html'
    });
});
