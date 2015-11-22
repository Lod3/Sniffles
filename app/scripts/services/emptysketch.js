'use strict';

/**
 * @ngdoc service
 * @name snuifDoosFrontendApp.emptySketch
 * @description
 * # emptySketch
 * Factory in the snuifDoosFrontendApp.
 */
angular.module('snuifDoosFrontendApp')
  .factory('emptySketch', ['p5', function(p5) {
  return function(p) {
    //variablen
    var r = p.random(0, 255);
    var g = p.random(0, 255);

    p.setup = function() {
      //configuratie
      p.createCanvas(480, 270);
      p.noStroke();
    };

    p.draw = function() {
    //objecten
    };

  };
}]);