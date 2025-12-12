function gcd(h, d) {
  while (d !== 0) {
    [h, d] = [d, h % d]; 
  }
  return h;
}

let num1 = 28;
let num2 = 14;

console.log("Greatest Common Divisor is :", gcd(num1, num2));