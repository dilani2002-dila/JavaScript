function checkPalindrome(word) {
for (let i = 0; i < word.length / 2; i++) {
if (word.charAt(i) !==word.charAt(word.length - 1 - i)) {
console.log(false);
return;
}
}
console.log(true)
}
let word1 = "akka"
let word2 = "baby"

checkPalindrome(word1);
checkPalindrome(word2);


















