const removeFromArray = function(array, ...elems) {
  for(let i = 0; i < elems.length; i++) {
    array = array.filter((elem) => elem !== elems[i]);
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
