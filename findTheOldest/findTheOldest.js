let findTheOldest = function(people) {
    const oldest = people.sort((a, b) => {
        let lastGuy = 0;
        let nextGuy = 0;
        const myDate = new Date();
        if ("yearOfDeath" in a) {
            lastGuy = a.yearOfDeath - a.yearOfBirth;
        }
        else {
            lastGuy = myDate.getFullYear() - a.yearOfBirth;
        }
        if ("yearOfDeath" in b) {
            nextGuy = b.yearOfDeath - b.yearOfBirth;
        }
        else {
            nextGuy = myDate.getFullYear() - b.yearOfBirth;
        }
        return lastGuy > nextGuy ? -1: 1;
    });
    return oldest[0];
} 

module.exports = findTheOldest
