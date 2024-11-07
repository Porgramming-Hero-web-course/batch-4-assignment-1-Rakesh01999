
function sumArray(numbers: number[]): number {
    return numbers.reduce((sum, cur) => sum + cur, 0);
}

const ans = sumArray([1, 2, 3, 4, 5]);
console.log(ans);

