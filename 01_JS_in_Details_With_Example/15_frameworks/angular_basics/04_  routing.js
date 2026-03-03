// ==========================================================
// routing.js
// ==========================================================
// AngularJS Routing enables SPA (Single Page Application)
// Navigation without full page reload.
//
// Requires: angular-route.js
// Must inject "ngRoute" into module
// ==========================================================

// Redefine module with ngRoute dependency
// (Only define module once in real project)
var app = angular.module("myApp", ["ngRoute"]);

// ----------------------------------------------------------
// Route Configuration
// ----------------------------------------------------------
app.config(function ($routeProvider) {

  $routeProvider

    // Home Route
    .when("/", {
      template: "<h2>Home Page</h2><p>Welcome to AngularJS App</p>"
    })

    // About Route
    .when("/about", {
      template: "<h2>About Page</h2><p>This is SPA routing example.</p>"
    })

    // Users Route with Controller
    .when("/users", {
      template: `
        <h2>User List</h2>
        <ul>
          <li ng-repeat="user in users">
            {{ user }}
          </li>
        </ul>
      `,
      controller: function ($scope) {
        $scope.users = ["John", "Alice", "Bob"];
      }
    })

    // Default route
    .otherwise({
      redirectTo: "/"
    });

});

// ==========================================================
// How Routing Works:
//
// 1. ng-view directive in HTML
// 2. URL changes (#/about)
// 3. Angular loads matching template
// 4. Controller (if defined) executes
//
// Example URL:
// http://localhost:8000/#/about
//
// '#' is hash-based routing (client-side)
// ==========================================================