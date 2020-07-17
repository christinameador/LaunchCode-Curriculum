//6) The area of a rectangle is equal to its length x width.

//Define a function and the required parameters to calculate the area of a rectangle.
//The function should return the area, NOT print it.

//Call your area function by passing a length and width, then use a template literal to print, “The area is ____ cm^2.”

//If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.

function rectangleArea(height, width) {
    if (width === undefined) {
        width = height;
    }
    let area = (height * width);
    return area;
}

console.log(`The area is ${rectangleArea(3,5)}cm^2`);
console.log(rectangleArea(3));