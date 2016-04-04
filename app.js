var myAppModule = angular.module('myApp',['ui.router']);

myAppModule.config(function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home',{
      url:'/home',
      templateUrl:'views/partial-home.html',
      controller: function($scope,$state,$stateParams) {
        $scope.aboutUs = function() {
          $state.go('aboutus');
        };
        $scope.name = "NishantJain";
        console.log("Params in home",$stateParams);
      }
    })
    .state('home.list',{
      url: '/list',
      params: {
        name: 'Aaron'
      },
      templateUrl: 'views/partial-home-list.html',
      controller: function($scope,$stateParams) {
        console.log('StateParams',$stateParams);
        $scope.names = ['Item - 1','Item - 2','Item - 3'];
      }
    })
    .state('home.paragraph',{
      url: '/paragraph',
      templateUrl: 'views/partial-home-para.html',
      controller: function($scope) {
        $scope.paragraph = "This is a sample paragraph";
        $scope.name = "Blahh";
        console.log("Accessing state",$scope.name);
        console.log("Accessing parents state",$scope.$parent.name);
      }
    })
    .state('home.paragraph.paraList',{
      url: '/list',
      templateUrl: 'views/partial-home-paraList.html',
      controller: function($scope,$stateParams) {
        $scope.names = ['Item - 1','Item - 2','Item - 3'];
        console.log("Inside para list",$stateParams);
        console.log("Accessing state",$scope.name);
        console.log("Accessing parents state",$scope.$parent.name);
        $scope.name = "Blueeee";
      }
    })
    .state('aboutus',{
      url: '/aboutus',
      templateUrl: 'views/partial-about.html'
    });
});
