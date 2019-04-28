const { should } = require('chai');
should();
const {
  getDiagonal,
  getReverseDiagonal,
} = require('../connect-four');
const {
  matrixA,
  matrixB,
  matrixAoffset,
  matrixBoffset,
  matrixBnegativeOffset,
  realMatrix,
} = require('./connect-four-helper');


describe('getDiagonal', function checkList() {
  it('should return "A" array for main diagonal', function() {
    getDiagonal(matrixA).should.be.deep.equal(['A', 'A', 'A', 'A']);
  });
  it('should return "A" array for side diagonal', function() {
    getReverseDiagonal(matrixB).should.be.deep.equal(['A', 'A', 'A', 'A']);
  });
  it('should return "A" array for main diagonal with offset', function() {
    getDiagonal(matrixAoffset, 1).should.be.deep.equal(['B', 'B', 'B']);
  });
  it('should return "A" array for main diagonal with offset', function() {
    getReverseDiagonal(matrixBoffset, 1).should.be.deep.equal(['A', 'A', 'A']);
  });
  it('should return "A" array for main diagonal with negative offset', function() {
    getReverseDiagonal(matrixBnegativeOffset, -1).should.be.deep.equal(['A', 'A', 'A']);
  });
  it('should return "A" array for real matrix at main diagonal', function() {
    getDiagonal(realMatrix).should.be.deep.equal(['A', 'A', 'A', 'A']);
  });
});

// describe('connectFour', function checkList() {
//   it('should return "A" for ["A", "A", "A", "A", "B"]', function() {
//     connectFour(['A', 'A', 'A', 'A', 'B']).should.be.equal('A');
//   });
//   it('should return FALSE for [A", "A", "A", "B"]', function() {
//     connectFour(['A', 'A', 'A', 'B']).should.be.equal(false);
//   });
//   it('should return FALSE for [A", "B", "A", "A", "A"]', function() {
//     connectFour(['A', 'B', 'A', 'A', 'A']).should.be.equal(false);
//   });
//   it('should return "A" for ["A", "B", "B", "B", "B"]', function() {
//     connectFour(['A', 'B', 'B', 'B', 'B']).should.be.equal('B');
//   });
// });

// describe('connectFour', function checkList() {
//   it(`should return "Red" for [
//       "A_Red",
//       "A_Red",
//       "A_Red",
//       "A_Red",
//       "B_Yellow"]`, function() {
//     connectFour(['A_Red', 'A_Red', 'A_Red', 'A_Red', 'B_Yellow']).should.be.equal('Red');
//   });
//   it(`should return "Red" for [
//       "A_Red",
//       "B_Red",
//       "C_Red",
//       "D_Red",
//       "B_Yellow"]`, function() {
//     connectFour(['A_Red', 'B_Red', 'C_Red', 'D_Red', 'B_Yellow']).should.be.equal('Red');
//   });
// });
