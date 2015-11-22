'use strict';

describe('Service: simpleCirlesSketch', function () {

  // load the service's module
  beforeEach(module('snuifDoosFrontendApp'));

  // instantiate service
  var simpleCirlesSketch;
  beforeEach(inject(function (_simpleCirlesSketch_) {
    simpleCirlesSketch = _simpleCirlesSketch_;
  }));

  it('should do something', function () {
    expect(!!simpleCirlesSketch).toBe(true);
  });

});
