(function() {
  "use strict";
  angular.module("jensApp").controller("mainCtrl", mainCtrl);

  mainCtrl.$inject = ["$rootScope", "$scope", "mainSvc", "$timeout"];

  function mainCtrl($rootScope, $scope, mainSvc, $timeout) {}
})();

(function() {
  "use strict";
  angular.module("jensApp").controller("startCtrl", startCtrl);

  startCtrl.$inject = ["$rootScope", "$scope", "mainSvc", "$timeout"];

  function startCtrl($rootScope, $scope, mainSvc, $timeout) {
    $rootScope.uisettings.headerbackground = "img/top-start.jpg";
  }
})();

(function() {
  "use strict";
  angular.module("jensApp").controller("cvCtrl", cvCtrl);

  cvCtrl.$inject = ["$rootScope", "$scope", "mainSvc", "$timeout"];

  function cvCtrl($rootScope, $scope, mainSvc, $timeout) {
    $rootScope.uisettings.headerbackground = "img/top-cv.jpg";
  }
})();

(function() {
  "use strict";
  angular.module("jensApp").controller("yogaCtrl", yogaCtrl);

  yogaCtrl.$inject = ["$rootScope", "$scope", "mainSvc", "$timeout"];

  function yogaCtrl($rootScope, $scope, mainSvc, $timeout) {
    $rootScope.uisettings.headerbackground = "img/top-yoga.jpg";
  }
})();

(function() {
  "use strict";
  angular.module("jensApp").controller("brewingCtrl", brewingCtrl);

  brewingCtrl.$inject = ["$rootScope", "$scope", "mainSvc", "$timeout"];

  function brewingCtrl($rootScope, $scope, mainSvc, $timeout) {
    $rootScope.uisettings.headerbackground = "img/top-brewing.jpg";
    $scope.$on("$viewContentLoaded", function(event) {
      $(function(){
        $('.scrollspy').scrollSpy();
      });
    });
  }
})();

(function() {
  "use strict";
  angular.module("jensApp").controller("lifehacksCtrl", lifehacksCtrl);

  lifehacksCtrl.$inject = ["$rootScope", "$scope", "mainSvc", "$timeout"];

  function lifehacksCtrl($rootScope, $scope, lifehacksCtrl, $timeout) {
    $rootScope.uisettings.headerbackground = "img/top-lifehacks.png";
  }
})();

(function() {
  "use strict";
  angular.module("jensApp").controller("codeCtrl", codeCtrl);

  codeCtrl.$inject = ["$rootScope", "$scope", "mainSvc", "$timeout"];

  function codeCtrl($rootScope, $scope, codeCtrl, $timeout) {
    $rootScope.uisettings.headerbackground = "img/top-code.png";
  }
})();
