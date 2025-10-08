function main(){
                let number = 1981;
                console.log("The given number is "+number);
                console.log("The reverse number is :"+reverseNumber(number));
                console.log("The sum of digit is:" + sumOfDigit(reverseNumber(number)));
}
main();



function reverseNumber(num){
       let reverseNumber=0;
       while(num>0){
                reverseNumber*=10;
                reverseNumber+=(num%10);
                num=Math.floor(num/10);
       }
      return reverseNumber;         
}



function sumOfDigit(num) {
  let sum = 0;
  while (num > 0) {
    sum += (num % 10);
    num = Math.floor(num / 10);
  }
  if (sum<10)
                return sum;
         else
                return sumOfDigit(sum);  
}
  
  

     

  

  

 

  


