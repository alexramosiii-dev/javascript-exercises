const palindromes = function (str) {
    let punc = ['!','.',',',' '];
    let rev = str.split("").filter(w=>!punc.includes(w)).reverse().join("").toLowerCase();
    let n = str.split("").filter(w=>!punc.includes(w)).join("").toLowerCase();
    return (rev === n)
};

// Do not edit below this line
module.exports = palindromes;
