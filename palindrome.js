const palindrome = (word) => {
  if (word.length < 2) {
    return true;
  }
  if (word[0] === word[word.length - 1]) {
    return palindrome(word.substr(1, word.length - 2));
  }
  return false;
}

module.exports = palindrome;
