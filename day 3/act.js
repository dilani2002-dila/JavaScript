//write a program that takes three numbers and prints the largest number.






//check whether a year is leap year or not.

var year= 2024;
function checkyear(year){
                if(year%4==0)
                                return "leap year";
                else return "not";
}
console.log(checkyear(year))


//write a program to check if a character is a vowel or consonant.



//a student has marks in three subjects.if the average is 40 or more,print "pass",otherwise print "fail".



//write a program that ask the time (in 24hr format).









function count(sentence) {
  const words = sentence.trim().split(/\s+/);
  return words.length;
}

const mySentence = "I am learning JavaScript today";
console.log(count(mySentence));
