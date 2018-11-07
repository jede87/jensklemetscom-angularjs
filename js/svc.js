(function() {
  "use strict";
  angular.module("jensApp").service("mainSvc", mainSvc);

  mainSvc.$inject = ["$http"];

  function mainSvc($http) {
    var service = {
      Getdata: getdata
    };

    return service;

    function successCallback(response) {
      return response.data;
    }

    function errorCallback(response) {
      return response.data;
    }

    function throwError(error) {
      throw error;
    }

    function getdata() {
      var root = "https://jsonplaceholder.typicode.com/";

      var request = {
        headers: {
          "Content-Type": "application/json"
        },
        method: "GET",
        url: root + "posts"
      };
      return $http(request)
        .then(successCallback, errorCallback)
        .catch(throwError);
    }
  }
})();
