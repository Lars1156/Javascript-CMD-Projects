function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const len = cleanStr.length;
    for (let i = 0; i < len / 2; i++) {
        if (cleanStr[i] !== cleanStr[len - 1 - i]) {
            return false;
        }
    }

    return true; 
}
console.log(isPalindrome("Nitin")); 
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));
