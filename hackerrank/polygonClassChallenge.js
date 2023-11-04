//Create a Polygon class that has the following properties:
//- A constructor that takes an array of integer values describing the lengths of the polygon's sides.
//- A perimeter() method that returns the polygon's perimeter.

//First I created the class and added the constructor to take an array of side lengths
class Polygon{
    constructor(sides = []) {
        this.sides = sides;
    }
    //Then I created the perimiter method that sets or resets the sum of side values to 0
    //From there I iterate over the length of the array so that each value in the array is added to the sum
    //The method returns the sum after all values in the array have been added
    perimeter() {
        let sum = 0
        for (let i = 0; i < this.sides.length; i++) {
            sum = sum + this.sides[i];
        }
        return sum
    }
}

//Testing code provided by HackerRank
const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());