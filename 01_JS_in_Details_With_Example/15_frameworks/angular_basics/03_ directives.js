// ==========================================================
// directives.js
// ==========================================================
// Directives extend HTML with custom behavior.
// They can:
// - Create custom elements
// - Modify DOM
// - Attach event behavior
//
// Types of restriction:
// E = Element
// A = Attribute
// C = Class
// M = Comment
// ==========================================================

// ----------------------------------------------------------
// Simple Custom Element Directive
// ----------------------------------------------------------
app.directive("helloWorld", function () {

  return {
    restrict: "E",  // Used as element <hello-world></hello-world>

    template: "<h3>Hello from custom directive!</h3>"

    // No link function needed here since static template
  };

});

// ----------------------------------------------------------
// Attribute Directive (DOM Manipulation)
// ----------------------------------------------------------
app.directive("highlight", function () {

  return {
    restrict: "A",  // Used as attribute

    link: function (scope, element, attrs) {

      // element → wrapped DOM element
      // attrs → attribute values

      element.css("background-color", attrs.highlight || "yellow");

      // Add mouse hover effect
      element.on("mouseenter", function () {
        element.css("color", "red");
      });

      element.on("mouseleave", function () {
        element.css("color", "black");
      });

    }
  };

});

// ==========================================================
// Directive Structure Properties:
//
// restrict     → How directive is used
// template     → Inline HTML
// templateUrl  → External HTML file
// scope        → Isolated scope option
// link         → DOM manipulation logic
// controller   → Directive-specific controller
// ==========================================================