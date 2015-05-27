describe('foo', function() {
  it("is some function or expectation", function() {
    expect(foo('bar')).to.equal(false);
  });
});


describe('primeSift', function() {
  it("expects an array containing only prime numbers", function() {
    expect(primeSift(4)).to.eql([2,3]);
    expect(primeSift(9)).to.eql([2,3,5,7]);
    expect(primeSift(22)).to.eql([2,3,5,7,11,13,17,19]);
  });
});
