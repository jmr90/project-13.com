//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//I began by creating the function that takes the argument 'number'
function evenOrOdd(number) {
    //I used an if else statement so the function returns Even if number has a remainder of 0 when divided by 2
    //If the remainder is not 0 when divided by 2, it returns odd
    if (number % 2 === 0) {
          return "Even";
    } else {
          return "Odd";
    };
};