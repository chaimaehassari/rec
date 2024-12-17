function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (cleanStr.length <= 1) return true; 
    if (cleanStr[0] !== cleanStr[cleanStr.length - 1]) return false;
    return isPalindrome(cleanStr.slice(1, -1));
}
