'use strict';

/**
 * @ngdoc service
 * @name snuifDoosFrontendApp.circlesSketch
 * @description
 * # circlesSketch
 * Factory in the snuifDoosFrontendApp.
 */
angular.module('snuifDoosFrontendApp')
  .factory('circlesSketch', ['p5', function(p5) {
  return function(p) {
    var rad = 60;        // Width of the shape
    var xpos, ypos;    // Starting position of shape    

    var xspeed = 2.8;  // Speed of the shape
    var yspeed = 2.2;  // Speed of the shape

    var xdirection = 1;  // Left or Right
    var ydirection = 1;  // Top to Bottom


    p.setup = function() {
        p.createCanvas(640, 360); //Pieter: oorspronkelijk size(640,360)
        p.noStroke();
        p.frameRate(30);
        p.ellipseMode(p.RADIUS); //RADIUS?
        // Set the starting position of the shape
        xpos = p.width/2;
        ypos = p.height/2;
    };

    p.draw = function() {
      p.background(102);
  
      // Update the position of the shape
      xpos = xpos + ( xspeed * xdirection );
      ypos = ypos + ( yspeed * ydirection );
      
      // Test to see if the shape exceeds the boundaries of the screen
      // If it does, reverse its direction by multiplying by -1
      if (xpos > p.width-rad || xpos < rad) {
        xdirection *= -1;
      }
      if (ypos > p.height-rad || ypos < rad) {
        ydirection *= -1;
      }

      // Draw the shape
      p.ellipse(xpos, ypos, rad, rad);

    };
  };
}]);