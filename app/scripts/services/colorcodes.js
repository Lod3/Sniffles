'use strict';

/**
 * @ngdoc service
 * @name snuifDoosFrontendApp.simpleCirlesSketch
 * @description
 * # simpleCirlesSketch
 * Factory in the snuifDoosFrontendApp.
 */
angular.module('snuifDoosFrontendApp')
  .factory('colorcodes', ['p5', function(p5) {
  return function(p) {

    p.setup = function() {
        p.createCanvas(600, 250); //Pieter: oorspronkelijk size(640,360)
        p.noStroke();
    };

    p.draw = function() {
      p.background(152);
      // Draw the shape

  
      p.fill(255,65,12); // HTTP
      p.rect(25,25,100,100);

      p.fill (232,98,79); // ftp
      p.rect(130,25,100,100);

      p.fill (121,232,108); // Presentation
      p.rect(235,25,100,100);

      p.fill (86,87,255); // Session, netbios,PPTP,RPC,SOCKS
      p.rect(340,25,100,100);

      p.fill (99,182,255); // Transport - TCP and UDP
      p.rect(445,25,100,100);

      p.fill (255,212,87); // Network - IPv4, IPv6, ICMP, and IPSec 
      p.rect(25,130,100,100);

      p.fill (255,212,87); // Data link - ARP 
      p.rect(25,130,100,100);

    };
  };
}]);