'use strict';

/**
 * @ngdoc service
 * @name snuifDoosFrontendApp.simpleCirlesSketch
 * @description
 * # simpleCirlesSketch
 * Factory in the snuifDoosFrontendApp.
 */
angular.module('snuifDoosFrontendApp')
  .factory('simpleCirlesSketch', ['p5', function(p5) {
  return function(p) {

    p.setup = function() {
        p.createCanvas(650, 650); //Pieter: oorspronkelijk size(640,360)
        p.noStroke();
    };

    p.draw = function() {
      p.background(102);
      // Draw the shape
      p.ellipse(200, 200, 100, 100);
      p.ellipse(250, 250, 100, 100);
      p.ellipse(400, 200, 150, 150);

    };
  };
}]);