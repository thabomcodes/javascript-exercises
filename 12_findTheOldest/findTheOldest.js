const getAge = function (person) {
  const { yearOfBirth, yearOfDeath } = person;
  return yearOfDeath !== undefined
    ? yearOfDeath - yearOfBirth
    : new Date().getFullYear() - yearOfBirth;
};
const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currentPerson) => {
    if (getAge(oldestPerson) < getAge(currentPerson)) return currentPerson;
    return oldestPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
