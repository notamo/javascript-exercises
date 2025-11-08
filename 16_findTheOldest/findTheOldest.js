const findTheOldest = function(arr) {
    let currOldest = {obj: {}, age: 0};

    for (person of arr) {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
        
        const age = person.yearOfDeath - person.yearOfBirth;
        if (age > currOldest.age) {
            currOldest = {
                obj: person,
                age: age,
            }
        }
    
    }

    return currOldest.obj;
};

// Do not edit below this line
module.exports = findTheOldest;
