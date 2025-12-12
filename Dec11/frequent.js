function Frequent() {
    const freq = {};
    let maxCount = 0;
    let FrequentElement;

    for (let item of arr) {
        freq[item] = (freq[item] || 0) + 1;

        if (freq[item] > maxCount) {
            maxCount = freq[item];
            FrequentElement = item;
        }
    }

    return FrequentElement;
}

console.log(Frequent(["a", "b", "a", "c"])); 

console.log(Frequent([2, 3, 5, 4, 6, 3, 4, 7, 2, 9])); 

console.log(Frequent([true, false, "false", "true", false])); 

console.log(Frequent([40, 20, 70, 40, 10, 40, 10, 50, 40, 60])); 







































