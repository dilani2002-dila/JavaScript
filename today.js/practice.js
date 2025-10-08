function checkPalindrome(word) {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            console.log("It's not a palindrome");
            return; 
        }}
    console.log("It's a palindrome");
}
checkPalindrome("muththu");


