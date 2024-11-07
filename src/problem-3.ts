
function countWordOccurrences(inputString: string, word: string): number {
    const target = word.toLowerCase();
    let count = 0;
    let currentWord = "";

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i].toLowerCase();

        if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
            currentWord += char;
        } else {
            if (currentWord === target) {
                count++;
            }
            currentWord = "";
        }
    }
    if (currentWord === target) {
        count++;
    }
    return count;
}

console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")); 
