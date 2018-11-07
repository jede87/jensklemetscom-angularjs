"use strict";

//create the app
var jensApp = angular.module("jensApp", ["ngRoute", "ngSanitize"]);

jensApp.config([
  "$locationProvider",
  "$routeProvider",
  "$httpProvider",
  function($locationProvider, $routeProvider, $httpProvider) {
    $routeProvider
      .when("/", {
        controller: "startCtrl",
        cache: false,
        templateUrl: "views/start.html",
        title: "jens klemets developer brewer lifter climber hiker techno"
      })
      .when("/cv", {
        controller: "cvCtrl",
        cache: false,
        templateUrl: "views/cv.html",
        title: "curriculum vitae"
      })
      .when("/yoga", {
        controller: "yogaCtrl",
        cache: false,
        templateUrl: "views/yoga.html",
        title: "yoga to erase a day at a desk"
      })
      .when("/brewing", {
        controller: "brewingCtrl",
        cache: false,
        templateUrl: "views/brewing.html",
        title: "brewing with biab"
      })
      .when("/code", {
        controller: "codeCtrl",
        cache: false,
        templateUrl: "views/code.html",
        title: "home made \"sriracha\" sauce"
      })
      .when("/lifehacks", {
        controller: "lifehacksCtrl",
        cache: false,
        templateUrl: "views/lifehacks.html",
        title: "lifehacks"
      })
      .when("/code", {
        controller: "codeCtrl",
        cache: false,
        templateUrl: "views/code.html",
        title: "code"
      })
      .otherwise({ redirectTo: "/" });

    $locationProvider.html5Mode(true);
  }
]);

jensApp.run([
  "$rootScope",
  "$route",
  "$location",
  function($rootScope, $route, $location) {
    $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
      $rootScope.title = current.$$route.title;
    });
    $rootScope.uisettings = {
      headerbackground: "img/top-start.jpg",
      imgLoading: false,
      camelposeimg: "img/camel-pose-routine.jpg"
    };
  }
]);

(function($) {
  $(function() {
    $(".parallax").parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space
