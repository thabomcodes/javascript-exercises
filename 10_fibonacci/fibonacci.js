const fibonacciRecursive = function (n) {
    if (n <= 0) return "OOPS";
    if (n == 1 || n == 2) return 1;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

const fibonacci = function(n) {
    if (n <= 0) return "OOPS";

    if (n == 1 || n == 2) return 1;

    let prev = 1;
    let curr = 1;
    for (let i = 3; i <= n; i++) {
        let newCurr = curr + prev;
        prev = curr;
        curr = newCurr;
    }
    return curr;
};

// Do not edit below this line
module.exports = {fibonacciRecursive, fibonacci};
