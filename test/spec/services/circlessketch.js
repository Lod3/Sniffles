'use strict';

describe('Service: circlesSketch', function () {

  // load the service's module
  beforeEach(module('snuifDoosFrontendApp'));

  // instantiate service
  var circlesSketch;
  beforeEach(inject(function (_circlesSketch_) {
    circlesSketch = _circlesSketch_;
  }));

  it('should do something', function () {
    expect(!!circlesSketch).toBe(true);
  });

});
