let sentence = "I am feeling not well today";

function count(sentence) {
  const words = sentence.split(" ");
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    count++;
  }

  return count;
}

console.log(count(sentence));




