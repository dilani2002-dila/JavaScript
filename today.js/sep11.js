function generateMatrix(row,col){
                let mat= [];
                for (let i= 0; i<row ; i++){
                mat[i]=[];
                for (let j=0; j<col; j++){
                mat [i][j]=Math.floor(Math.random ()*100+2);

}
}
                return mat;
}
function printMatrix(mat){
                for(let i=0; i<mat.length; i++){
                console.log(mat[i]);
                }
}
function findMax(mat) {
  let max = -Infinity;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] > max) {
        max = mat[i][j];
      }
    }
  }
  return max;
}

let row = 10;
let col = 5;
let mat=generateMatrix(row,col);

console.log("matrix is:");
printMatrix(mat);
const maximum = findMax(mat);
console.log("Maximum value in matrix is:", maximum);




