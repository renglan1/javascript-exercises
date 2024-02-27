const sumAll = function (first, last) {
  let sum = first;
  let next;

  if (first < 0 || last < 0) {
    return 'ERROR';
  }

  if (typeof(first) !== 'number' || typeof(last) !== 'number') {
    return 'ERROR';
  }

  if (first <= last) {
    next = first + 1;

    for (let i = first; i < last; i++) {
      sum += next++;
    }
  }
  else {
    next = first - 1;

    for (let i = first; i > last; i--) {
      sum += next--;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
