'use strict';

describe('Service: p5Wrapper', function () {

  // load the service's module
  beforeEach(module('snuifDoosFrontendApp'));

  // instantiate service
  var p5Wrapper;
  beforeEach(inject(function (_p5Wrapper_) {
    p5Wrapper = _p5Wrapper_;
  }));

  it('should do something', function () {
    expect(!!p5Wrapper).toBe(true);
  });

});
