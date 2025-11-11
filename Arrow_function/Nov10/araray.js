class Tuple {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
function findIndex(stringArr, keyString) {
    let flattenedArr = [];
    for (let row of stringArr) {
        flattenedArr = flattenedArr.concat(row);
    }

    let index = flattenedArr.indexOf(keyString);
    if (index !== -1) {
        let rows = stringArr.length;
        let cols = stringArr[0].length;
        return new Tuple(Math.floor(index / cols), index % cols);
    }

    return new Tuple(-1, -1);
}
function main() {
    let stringArr = [
        ["c", "a", "t"],
        ["o", "n", "g"],
        ["t", "t", "n"]
    ]
    let keyString = "c";

    let result = findIndex(stringArr, keyString);

    console.log("The indices are: " + result.x + " , " + result.y);
}

main();