jensApp.directive("imageonload", function() {
  return {
    restrict: "A",
    link: function(scope, element, attrs) {
      element.bind("load", function() {
        console.log("lodaing...");
      });

      element.bind("error", function() {
        alert("Error: Parallax image not found!");
      });
    }
  };
});
jensApp.directive("lazyImg", function() {
  return {
    restrict: "EA",
    link: function(scope, element, attrs) {
      console.log(element);
      
      $(element).find('img').each(function() {
        console.log($(this).attr('data-src'));
      });

    }
  };
});
