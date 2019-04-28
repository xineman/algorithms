const { should } = require('chai');
should();
const palindrome = require('../palindrome');


describe('Palindrome', function sorting() {
  it('should return TRUE for tet', function() {
    palindrome('tet').should.be.ok;
  });
  it('should return TRUE for xyzyzyx', function() {
    palindrome('xyzyzyx').should.be.ok;
  });
  it('should return FALSE for motor', function() {
    palindrome('motor').should.not.be.ok;
  });
  it('should return FALSE for tre', function() {
    palindrome('ter').should.not.be.ok;
  });
});