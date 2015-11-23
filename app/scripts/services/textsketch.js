'use strict';

/**
 * @ngdoc service
 * @name snuifDoosFrontendApp.textSketch
 * @description
 * # textSketch
 * Factory in the snuifDoosFrontendApp.
 */
angular.module('snuifDoosFrontendApp')
  .factory('textSketch', ['p5', function(p5) {
  return function(p) {

    p.setup = function() {
        p.createCanvas(650, 650); //Pieter: oorspronkelijk size(640,360)
        p.noStroke();
    };

    p.draw = function() {
      p.background(152);
      //https://processing.org/reference/text_.html

      p.fill(255,255,255);
      p.textSize(32);
      p.text("word", 10, 30); 
      p.fill(0, 102, 153);
      p.text("word", 10, 60);
      p.fill(0, 102, 153, 51); //with alpha
      p.text("word", 10, 90);

    };
  };
}]);
