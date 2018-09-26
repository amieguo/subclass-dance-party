describe('GrowingDancer', function() {

  var growingDancer;
  beforeEach(function () {
    growingDancer = new GrowingDancer(10, 20, 0);
  });
  it('should have a grow method', function () {
    expect(growingDancer.grow).to.be.a('function');
  });
});
