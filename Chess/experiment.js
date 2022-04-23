
let arr = [1,2];

[arr[0],arr[1]] = [arr[1],arr[0]];
console.log(arr);

let matrix = [[4,1,4,3],[9,5,1,7],[4,1,3,5]];

 matrix = matrix.map((row) => row.join('')).sort((a,b) => a - b).map((row) => row.trim().split('').map(Number));
//  matrix = matrix.sort((a,b) => a - b);
//  matrix = matrix.map((row) => row.trim().split('').map(Number));

 console.log(matrix);