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
      p.background(152);
      // Draw the shape
      // stroke(255, 77, 55);

      //p.tint(255, 128); // applies to pictures, apparantly 
      p.stroke(0, 153, 204, 126); // Stroke (R,G,B)
      p.fill(150, 25, 177); // vul (R,G,B)
      p.ellipse(250, 200, 100, 100);

      //p.tint(255, 128);// applies to pictures, apparantly  
      p.fill(450, 80, 150,128); // Stroke (R,G,B,transparancy)
      p.ellipse(250, 250, 100, 100);

      // p.tint(255, 128); // applies to pictures, apparantly  
      p.ellipse(400, 200, 150, 150);

    };
  };
}]);