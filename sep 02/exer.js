//Search for an element in the array and return its index.
let arrayX=[50,40,10,70,90,80];
function findIndexInArray(array, num){
    let index="";
    for(let i=0; i<array.length; i++){
        if(array[i]==num){
            index+=(i+",");
        }
    }
    return index;
}
let indexvalue = findIndexInArray(arrayX,90);
if(indexvalue==-1);
    console.log("the number isn't found");
    console.log("the number is available");

//Calculate the average of the elements.
function findAvgOfArray(array){
    let sum=0, avg=0;
    for(let i=0; i<array.length; i++){
        sum+=array[i];
    }
    avg = sum/array.length;
    return avg;
}
console.log("the avg of the array is "+findAvgOfArray(arrayX));

//Write a function reverseArray() that reverses the order of the elements.

function reverseArray(array){
    let reversearray=[];

    for(let i=0; i<array.length; i++){
        reversearray[i]=array[array.lenth-1-i];
    }

    return reversearray;
}
console.log("the original array values are "+arrayX);


//Write a function exists(element) that prints true if the element is present, otherwise false.
//Write a function checkPalindrome(word) that indicate whether the given word is palindrome or not.
//Write a function sumOfDigi(number) that prints the sum of the given number.