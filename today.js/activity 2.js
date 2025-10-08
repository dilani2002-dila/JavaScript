
function generateMatrix(row,col){
                let mat = [];
                for (let i= 0; i<row ; i++){
                for( let j=0; j<col; j++){
                 mat [i][j]=Math.floor(Math.random ()*100+2);
                }
                }
                return mat;
}
function printMatrix(mat){
                for (let i = 0; i< mat.length; i++){
                 console.log(mat[i]);
                }
}
function sumofmatrix(mat1,mat2){
                let summatrix = Array.from ({length: mat1.length}, ()=>Array (mat1[0].length).fill(0));
                for (let i=0; i<mat1.length; i++){
                for (let j= 0; j<mat1[0].lemgth; j++){
                                summatrix[i][j]=mat1[i][j]+mat2[i][j];
                }
                }
                return summatrix;
}

let row=3;
let col=4;
let mat1=generateMatrix(row,col);
let mat2=generateMatrix(row,col);

console.log("matrix 1 is:");
printMatrix(mat1);
console.log("matrix 2 is:");
printMatrix(mat2);


console.log("summation of both matrix is");
let summat = sumofmatrixes(mat1,mat2);
printMatrix(summat)

