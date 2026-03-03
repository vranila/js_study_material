// ==========================================================
// services.js
// ==========================================================
// Services in AngularJS:
// - Reusable business logic
// - Singleton (one instance shared)
// - Used across multiple controllers
// - Created using: service, factory, provider
// ==========================================================

// Service using "service" keyword
app.service("MathService", function () {

  // Internal private variable
  var taxRate = 0.1;

  // Public methods using "this"
  this.add = function (a, b) {
    return a + b;
  };

  this.multiply = function (a, b) {
    return a * b;
  };

  this.calculateWithTax = function (amount) {
    return amount + (amount * taxRate);
  };

});

// ----------------------------------------------------------
// Using Service inside Controller
// Dependency Injection automatically injects MathService
// ----------------------------------------------------------

app.controller("CalcController", function ($scope, MathService) {

  $scope.resultAdd = MathService.add(5, 3);
  $scope.resultMultiply = MathService.multiply(4, 2);
  $scope.priceWithTax = MathService.calculateWithTax(100);

});

// ==========================================================
// Why Services?
// - Keeps controllers clean
// - Centralized business logic
// - Reusable
// - Easier to test
// ==========================================================