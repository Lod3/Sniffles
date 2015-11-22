'use strict';

describe('Service: emptySketch', function () {

  // load the service's module
  beforeEach(module('snuifDoosFrontendApp'));

  // instantiate service
  var emptySketch;
  beforeEach(inject(function (_emptySketch_) {
    emptySketch = _emptySketch_;
  }));

  it('should do something', function () {
    expect(!!emptySketch).toBe(true);
  });

});
