const findTheOldest = function(arr) {
    return arr.reduce((old,curr) => {
        let oldAge = ((old.yearOfDeath) ? old.yearOfDeath:new Date().getFullYear()) - old.yearOfBirth;
        let currAge = ((curr.yearOfDeath) ? curr.yearOfDeath:new Date().getFullYear()) - curr.yearOfBirth;
        return oldAge > currAge ? old:curr;
    },{})
};

// Do not edit below this line
module.exports = findTheOldest;
