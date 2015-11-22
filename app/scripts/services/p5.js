'use strict';

/**
 * @ngdoc service
 * @name snuifDoosFrontendApp.p5
 * @description
 * # p5
 * Factory in the snuifDoosFrontendApp.
 */
angular.module('snuifDoosFrontendApp')
  .factory('p5', ['$window', function($window) {
  return $window.p5;
}]);
