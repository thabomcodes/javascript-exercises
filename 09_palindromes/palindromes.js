const palindromes = function (sentence) {
    const s = sentence.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reverse = s.split("").reverse().join("");
    return s === reverse;
};

// Do not edit below this line
module.exports = palindromes;
