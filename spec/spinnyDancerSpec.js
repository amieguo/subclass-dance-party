describe('SpinnyDancer', function() {
  var spinnyDancer;
  
  beforeEach(function() {
    spinnyDancer = new SpinnyDancer(10, 20, 0);
  });  
  
  it('should have a lineUp method inherited from dancer', function () {
    expect(spinnyDancer.lineUp).to.be.a('function');
  });  
});
