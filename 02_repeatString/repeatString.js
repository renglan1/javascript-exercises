const repeatString = function(str, rep) {
  if (rep < 0) return 'ERROR';
  
  let repStr = '';

  for (let i = 0; i < rep; i++) {
    repStr += str;
  }

  return repStr;
};

// Do not edit below this line
module.exports = repeatString;
