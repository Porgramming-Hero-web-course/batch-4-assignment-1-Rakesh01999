{

    const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (!(key in obj)) {
                return false; 
            }
        }
        return true;
    };
    
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"])); // Output: true
    console.log(validateKeys(person, ["name", "address" as keyof typeof person])); // Output: false
    
}