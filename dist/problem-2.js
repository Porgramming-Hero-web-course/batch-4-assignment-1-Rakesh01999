"use strict";
function removeDuplicates(numbers) {
    const uniqueNumbers = [];
    for (const num of numbers) {
        if (!uniqueNumbers.includes(num)) {
            uniqueNumbers.push(num);
        }
    }
    return uniqueNumbers;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
