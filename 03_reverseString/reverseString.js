const reverseString = function(str) {
  const chars = str.split('');
  const reversed = chars.reverse();
  
  return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
