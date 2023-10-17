const sumAll = function(start,end) {
    if(typeof start != 'number' || typeof end != 'number') return "ERROR";
    if(start < 0 || end < 0) return "ERROR";

    return ((start > end) ? start : end)/2 * (((start < end) ? start : end)+((start > end) ? start : end));
};

// Do not edit below this line
module.exports = sumAll;
