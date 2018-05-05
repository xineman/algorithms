const { should } = require('chai');
should();
const merge = require('../merge');


describe('Sorting', function sorting() {
  describe('Merge', function mergeTest() {
    it('should return [1, 2, 3] for [2, 3, 1]', function() {
      merge([2, 3, 1]).should.deep.equal([1, 2, 3]);
    });
    it('should return [1, 8, 17, 58, 110] for [110, 58, 17, 8, 1]', function() {
      merge([110, 58, 17, 8, 1]).should.deep.equal([1, 8, 17, 58, 110]);
    });
    it('should return [9, 11, 20, 300] for [20, 9, 300, 11]', function() {
      merge([20, 9, 300, 11]).should.deep.equal([9, 11, 20, 300]);
    });
    it('should return [-2098, -156, 0, 1, 1, 29, 300] for [1, -2098, -156, 1, 0, 300, 29]', function() {
      merge([1, -2098, -156, 1, 0, 300, 29]).should.deep.equal([-2098, -156, 0, 1, 1, 29, 300]);
    });
  })
});
