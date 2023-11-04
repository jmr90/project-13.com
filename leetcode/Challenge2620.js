// Given an integer n, return a counter function. This counter function initially returns n and then 
// returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

//First I created the initial counter creator that takes n and can be called again later
var createCounter = function(n) {
    //I set i to -1 so that I could execute the i++ code prior to the return statement
    i = -1
    return function() {
        //With i++ being executed first, i becomes 0 and this function returns n during the first iteration
        //Every subsequent time it is called, it i is increased and returns 1 more than the previous value
        i++;
        return n + i;
    };
};

//Testing code provided by LeetCode
const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12