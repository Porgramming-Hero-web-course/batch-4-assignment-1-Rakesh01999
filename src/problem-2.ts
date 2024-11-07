

function removeDuplicates(numbers: number[]): number[] {

    const uniqueNumbers: number[] = [];
    for (const num of numbers) {
        if (!uniqueNumbers.includes(num)) {
            uniqueNumbers.push(num);
        }
    }
    return uniqueNumbers;
}

const order = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(order);

