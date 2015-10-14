angular.module('doughApp', [])
  .controller('DoughnutController', DoughnutController);

DoughnutController.$inject = ['$http'];

function DoughnutController($http) {

  var self = this;

  self.all = [];

  function getDoughnuts() {
    $http
      .get('http://api.doughnuts.ga/doughnuts')
      .then(function(response) {
        self.all = response.data
      });
  };

  getDoughnuts();

  self.addNut = addNut;
  self.newNut = {};

  function addNut() {
    $http
    .post('http://api.doughnuts.ga/doughnuts', self.newNut)
    .then(function(response) {
      console.log(response.data);
      // getNuts();
      self.all.push(response.data)
    });
  };

  self.deleteNut = deleteNut;
  function deleteNut(id) {
    $http
      .delete('http://api.doughnuts.ga/doughnuts/:id')
      .success(function(response) {
        console.log(response)
      })
  }

  


}









