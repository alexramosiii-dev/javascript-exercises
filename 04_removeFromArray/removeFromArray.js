const removeFromArray = function(nums, ...remove) {
    return nums.filter((num) => !remove.includes(num))
};

// Do not edit below this line
module.exports = removeFromArray;
