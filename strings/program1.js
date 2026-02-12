function countWords(str) {
    return str.trim().split(/\s+/).length;
}

const result = countWords("Hi welcome to Coding Mythri website.");
console.log(result);