let sudoku = [];
function runProgram(input) { 
    input = input.trim().split('\n');
    conso
    //console.log(input);
    
    let line = 0;
    for ( let i = 0; i < input.length; i++){
      let x = input[line++].trim().split(' ').map(Number);
      sudoku.push(x);
     
    }

   // console.log(sudoku);
    possibleSudoku(0,0);
  //  console.log(sudoku);



}

function possibleSudoku(i,j){

  if(i == sudoku.length && j == sudoku[0].length) {
    console.log(sudoku);
    return
   }
  
   
  if(i == sudoku.length) {
    j = j + 1;
    i = 0;
  }
  else if(sudoku[i][j] !== 0) {
    console.log(i,j);
    if ( i === sudoku.length - 1) {}
    else i = i + 1 
    if ( j === sudoku[0].length - 1) {}
    else j = j + 1
  }

  for ( let k = 1; k < 10;k++){
    sudoku[i][j] = k;

   // console.log(validator(i,j,k))
   if(validator(i,j,k)) possibleSudoku(i+1,j);
  }
  sudoku[i][j] = 0;


}

function validator(x,y,num){
  // console.log(num);
 // console.log(x,y);

   for ( let i = 0; i < 9; i++){
       
       if(sudoku[i][y] === num && i !=x) return false;
       if(sudoku[x][i] === num && i != y) return false;
   }

   let startX = Math.floor(x/3) * 3;
   let startY = Math.floor(y/3) * 3;
   for (let i = startX; i < startX+3; i++){
       for ( let j = startY; j < startY+3; j++){
           if(sudoku[i][j] == num && i != x && j != y) {
               return false;
           }
       }
   }
   return true;

}


  if (process.env.USER === "aman") {
    runProgram(`0 4 0 0 0 0 1 7 9 
    0 0 2 0 0 8 0 5 4 
    0 0 6 0 0 5 0 0 8 
    0 8 0 0 7 0 9 1 0 
    0 5 0 0 9 0 0 3 0 
    0 1 9 0 6 0 0 4 0 
    3 0 0 4 0 0 7 0 0 
    5 7 0 1 0 0 2 0 0 
    9 2 8 0 0 0 0 6 0`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }