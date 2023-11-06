const removeFromArray = function(arr, ...args) {
    const argsArr = Array.from(args);
    for (const arg of args) {
        const i = arr.indexOf(arg);
        if (i > -1) arr.splice(i, 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
