function pc(startComputers) {

  let computers = startComputers;
  computers = computers * 2;
  let damaged = computers * 0.20;
  computers = computers - damaged;

  return computers;
}

let start = 50;
console.log("Balance PCs :", pc(start));
