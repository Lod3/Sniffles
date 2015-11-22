'use strict';

describe('Service: exampleSketch', function () {

  // load the service's module
  beforeEach(module('snuifDoosFrontendApp'));

  // instantiate service
  var exampleSketch;
  beforeEach(inject(function (_exampleSketch_) {
    exampleSketch = _exampleSketch_;
  }));

  it('should do something', function () {
    expect(!!exampleSketch).toBe(true);
  });

});
