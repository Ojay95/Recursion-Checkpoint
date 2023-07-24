function isPalindrome(word) {
    // Base cases
    if (word.length <= 1) {
        return true;
    }

    // Recursive step
    firstChar = word[0];
    lastChar = word[word.length - 1];

    if (firstChar != lastChar) {
        return false;
    }

    return isPalindrome(word.slice(1, word.length - 1));
}

// Driver code
const word = "racecar";
console.log(isPalindrome(word));
