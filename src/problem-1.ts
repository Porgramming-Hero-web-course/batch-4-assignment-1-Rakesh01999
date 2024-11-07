function sumArray(numbers: number[]):number{
    return numbers.reduce((sum, cur)=>sum+cur, 0 );
}

console.log(sumArray([1,2,3,4,5]));

