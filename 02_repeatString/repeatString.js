const repeatString = function(x, y) {
    let word = "";
    let i = 0;
    if(y<0) return "ERROR";
    while (i < y) {
        word += x;
        i++;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
