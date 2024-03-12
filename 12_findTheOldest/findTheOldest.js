const findTheOldest = function(people) {
  return people.reduce((prevPerson, curPerson) => {
    prevAge = (prevPerson.yearOfDeath ? prevPerson.yearOfDeath : new Date().getFullYear()) - prevPerson.yearOfBirth;
    curAge = (curPerson.yearOfDeath ? curPerson.yearOfDeath : new Date().getFullYear()) - curPerson.yearOfBirth;

    return prevAge > curAge ? prevPerson : curPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
