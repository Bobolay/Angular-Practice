angular.
  module('twitterApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<homepage></homepage>'
        }).
        when('/userpage', {
          template: '<userpage></userpage>'
        }).
        otherwise('/');
    }
  ]);