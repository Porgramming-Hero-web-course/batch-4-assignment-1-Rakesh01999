"use strict";
function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        return parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
    }
    else {
        return shape.width * shape.height;
    }
}
// Sample Input
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea); // Output: 78.54
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea); // Output: 24
