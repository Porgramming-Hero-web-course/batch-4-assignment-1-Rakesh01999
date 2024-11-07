function getProperty<T, K extends keyof T>(obj: T, key:K): T[K]{
    return obj[key];
}

// Sample Input:
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));

// Sample Output: Alice
