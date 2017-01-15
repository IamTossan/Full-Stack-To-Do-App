//Angular app
var todoApp = angular.module('todoApp', ['ngRoute']);

todoApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'views/main.html',
      controller: 'todoController'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);

todoApp.controller('todoController', ['$scope', '$http', function($scope, $http){

  $scope.messages = [];

  $scope.getMessages = function(){
    $http.get('/api').then(function(data){
      $scope.messages = data.data;

    }, function(data){
      console.log(data);
    });
  };

  $scope.getMessages();


  $scope.post = function(){
    console.log($scope.form._id);
    if(typeof($scope.form._id) !== 'undefined' && $scope.form._id !== ''){
      console.log('put request');
      $http.put('/api', $scope.form).then(
        function(data){
          $scope.messages = data.data;
          $scope.form.name = '';
          $scope.form.message = '';
          $scope.form._id = '';
          console.log(data.data);
        },
        function(data){
          console.log(data);
        }
      );
    } else{
      console.log('post request');
      $http.post('/api', $scope.form).then(
        function(data){
          $scope.messages = data.data;
          $scope.form.name = '';
          $scope.form.message = '';
          console.log(data.data);
        },
        function(data){
          console.log(data);
        }
      );
    }

  };

  $scope.delete = function(_id){
    $http.delete('/api/' + _id).then(
      function(data){
        $scope.messages = data.data;
        console.log(data.data);
      },
      function(data){
        console.log(data);
      }
    );
  };

  $scope.modify = function(item){
    console.log(item);
    $scope.form.name = item.name;
    $scope.form.message = item.message;
    $scope.form._id = item._id;
    $scope.messages.splice($scope.messages.indexOf(item), 1);
  }



}]);
