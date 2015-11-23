'use strict';

describe('Service: textSketch', function () {

  // load the service's module
  beforeEach(module('snuifDoosFrontendApp'));

  // instantiate service
  var textSketch;
  beforeEach(inject(function (_textSketch_) {
    textSketch = _textSketch_;
  }));

  it('should do something', function () {
    expect(!!textSketch).toBe(true);
  });

});
