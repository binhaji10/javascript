let fullName = "John Doe"; // index = position number
// =========================================
// JavaScript String Methods
// =========================================

// length
// console.log(fullName.length);
// Returns the number of characters in the string.
// Output: 8

// // toUpperCase()
console.log(fullName.toUpperCase());
// // Converts all characters to uppercase.
// // Output: "JOHN DOE"

// // toLowerCase()
// console.log(fullName.toLowerCase());
// // Converts all characters to lowercase.
// // Output: "john doe"

// // charAt(index)
// console.log(fullName.charAt(0));
// // Returns the character at the specified index.
// // Output: "J"

// // at(index)
// console.log(fullName.at(-1));
// // Returns the character at the given index.
// // Negative numbers count from the end.
// // Output: "e"

// // indexOf(value)
// console.log(fullName.indexOf("D"));
// // Returns the first index of the value.
// // Returns -1 if not found.
// // Output: 5

// // lastIndexOf(value)
// console.log(fullName.lastIndexOf("o"));
// // Returns the last occurrence of the value.
// // Output: 6

// // includes(value)
// console.log(fullName.includes("John"));
// // Checks if the string contains the value.
// // Output: true

// // startsWith(value)
// console.log(fullName.startsWith("John"));
// // Checks whether the string starts with the value.
// // Output: true

// // endsWith(value)
// console.log(fullName.endsWith("Doe"));
// // Checks whether the string ends with the value.
// // Output: true

// // slice(start, end)
// console.log(fullName.slice(0, 4));
// // Extracts characters from start up to (not including) end.
// // Output: "John"

// console.log(fullName.slice(5));
// // Extracts from index 5 to the end.
// // Output: "Doe"

// // substring(start, end)
// console.log(fullName.substring(5, 8));
// // Similar to slice(), but negative indexes become 0.
// // Output: "Doe"

// // substr(start, length) - Deprecated
// console.log(fullName.substr(5, 3));
// // Extracts a specified number of characters.
// // Output: "Doe"

// // replace(oldValue, newValue)
// console.log(fullName.replace("John", "Jane"));
// // Replaces the first occurrence.
// // Output: "Jane Doe"

// // replaceAll(oldValue, newValue)
// console.log("John John Doe".replaceAll("John", "Jane"));
// // Replaces every occurrence.
// // Output: "Jane Jane Doe"

// // split(separator)
// console.log(fullName.split(" "));
// // Splits the string into an array.
// // Output: ["John", "Doe"]

// // trim()
// console.log("   John Doe   ".trim());
// // Removes spaces from both ends.
// // Output: "John Doe"

// // trimStart()
// console.log("   John".trimStart());
// // Removes spaces from the beginning.
// // Output: "John"

// // trimEnd()
// console.log("John   ".trimEnd());
// // Removes spaces from the end.
// // Output: "John"

// // repeat(count)
// console.log("Hi ".repeat(3));
// // Repeats the string.
// // Output: "Hi Hi Hi "

// // concat()
// console.log(fullName.concat(" Jr."));
// // Joins strings together.
// // Output: "John Doe Jr."

// // padStart(targetLength, padString)
// console.log("5".padStart(3, "0"));
// // Pads the beginning of the string.
// // Output: "005"

// // padEnd(targetLength, padString)
// console.log("5".padEnd(3, "0"));
// // Pads the end of the string.
// // Output: "500"

// // search(value)
// console.log(fullName.search("Doe"));
// // Searches for the first match.
// // Output: 5

// // match(regex)
// console.log(fullName.match(/o/g));
// // Returns matching values as an array.
// // Output: ["o", "o"]

// // matchAll(regex)
// console.log([...("John John".matchAll(/John/g))]);
// // Returns an iterator of all matches.
// // Output:
// // [
// //   ["John", index: 0, ...],
// //   ["John", index: 5, ...]
// // ]

// // localeCompare(otherString)
// console.log("apple".localeCompare("banana"));
// // Compares strings alphabetically.
// // -1 = before
// //  0 = equal
// //  1 = after
// // Output: -1

// // valueOf()
// console.log(fullName.valueOf());
// // Returns the primitive string value.
// // Output: "John Doe"

// // toString()
// console.log(fullName.toString());
// // Converts the value to a string.
// // Output: "John Doe"


// // =========================================
// // Useful Character Access Examples
// // =========================================

// console.log(fullName[0]);
// // Access first character.
// // Output: "J"

// console.log(fullName[5]);
// // Access sixth character.
// // Output: "D"

// console.log(fullName[fullName.length - 1]);
// // Access last character.
// // Output: "e"


// // =========================================
// // Method Chaining
// // =========================================

// console.log(fullName.toUpperCase().slice(0, 4));
// // Converts to uppercase, then extracts first four letters.
// // Output: "JOHN"

// console.log(fullName.toLowerCase().replace("john", "jane"));
// // Chains multiple string methods.
// // Output: "jane doe"