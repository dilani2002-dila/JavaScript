function factorial(num) {
  if (num === 0 || num === 1) return 1;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

function factorialMatrix(n) {
  const matrix = [];

  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(factorial(i + j));
    }
    matrix.push(row);
  }

  matrix.forEach(row => {
    console.log(row.join('\t'));
  });

  return matrix;
}
factorialMatrix(5);

