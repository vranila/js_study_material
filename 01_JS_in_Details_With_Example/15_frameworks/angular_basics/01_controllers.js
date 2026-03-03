// ==========================================================
// controllers.js
// ==========================================================
// Controllers in AngularJS (1.x) manage view logic.
// They attach data and functions to $scope so the HTML view
// can bind and interact with them.
//
// Controller Responsibilities:
// - Provide data (model) to the view
// - Handle user interactions
// - Keep presentation logic
// - SHOULD NOT contain heavy business logic
// ==========================================================

// Create AngularJS module
// First argument: module name
// Second argument: dependencies (empty array means no external modules)
var app = angular.module("myApp", []);

// ----------------------------------------------------------
// Main Controller
// ----------------------------------------------------------
app.controller("MainController", function ($scope) {

  // $scope acts as a glue between Controller and View (HTML)
  // Properties attached to $scope are accessible in HTML.

  // Data Model
  $scope.title = "AngularJS Controller Example";

  // Counter variable
  $scope.count = 0;

  // Method exposed to view
  $scope.increment = function () {
    $scope.count++;
  };

  $scope.decrement = function () {
    $scope.count--;
  };

  // Example list
  $scope.items = ["Apple", "Banana", "Mango"];

  // Add new item dynamically
  $scope.addItem = function (item) {
    if (item) {
      $scope.items.push(item);
      $scope.newItem = ""; // reset input
    }
  };

});

// ==========================================================
// Key AngularJS Concepts Used:
// - ng-app (bootstraps Angular)
// - ng-controller (connects controller to DOM)
// - {{ }} (expression binding)
// - ng-click (event binding)
// - ng-model (two-way binding)
// ==========================================================