const sumAll = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number" || a < 0 || b < 0)
        return "ERROR";

    let i = Math.min(a, b);
    let j = Math.max(a, b);

    // using while loop
    let sum = 0;
    while (i <= j) {
        sum += i;
        i++;
    }
    return sum;
    // Simple return statement 
    // return j * (i + j) / 2; 
};

// Do not edit below this line
module.exports = sumAll;
