// utils.js
function isPalindrome(word) {
    if (typeof word !== 'string') {
        throw new Error("Input must be a string");
    }
    if (!/^[A-Za-z]*$/.test(word)) {
        throw new Error("Input must contain only alphabetic characters");
    }
    if (word === "") {
        return false;  // Explicitly handle empty strings as non-palindromes
    }
    const cleanedWord = word.toLowerCase();
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
}

export default isPalindrome;
