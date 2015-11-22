'use strict';

/**
 * @ngdoc service
 * @name snuifDoosFrontendApp.p5WrapperFactory
 * @description
 * # p5WrapperFactory
 * Factory in the snuifDoosFrontendApp.
 */
angular.module('snuifDoosFrontendApp')
  .factory('p5WrapperFactory', ['$injector', 'p5', function($injector, p5) {
  var p5WrapperFactory = {
    init: function(sketch, node) {
      this.destroy();
  
      if(sketch) {
        if($injector.has(sketch)) {
          sketch = $injector.get(sketch);
        }
        this.instance = new p5(sketch, node);
      }
    },
    
    destroy: function() {
      if(this.instance) {
        this.instance.remove();
        this.instance = null;
      }
    }
  };
  return function() {
    return Object.create(p5WrapperFactory);
  };
}]);
