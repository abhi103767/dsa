let sudoku = []
let zeros = [];
function runProgram(input) { 
    input = input.trim().split('\n');
    
    let rows = +input.length;
    for ( let i = 0; i < rows; i++){
        let x = input[i].trim().split(' ').map(Number);
        sudoku.push(x);
    }
// console.log(sudoku);




   
   
    

    for ( let i = 0; i < 9; i++){
        for ( let j = 0; j < 9; j++){
            if(sudoku[i][j] === 0){
             zeros.push([i,j]);
            }
            
        }

    }

   // console.log(zeros);
    
    console.log(sudoku);
}
finding(0,zeros);
console.log(sudoku);

function finding(cur,zeros){
   
  // console.log(zeros);
    if( cur === zeros.length) {
     // console.log(sudoku);
       solution(sudoku);
       return;
    }
    

  let [x,y] = zeros[cur];
 // console.log(x,y)
    for ( let i = 1; i < 10; i++){
          sudoku[x][y] = i;
      //   console.log(validator(x,y,i,sudoku))
          if(validator(x,y,i)) finding(cur+1,zeros);
    }
    sudoku[x][y] = 0;

}

function solution(sudoku){
console.log(sudoku);
for ( let i = 0; i < 9; i++){
   // console.log(sudoku[i].join(' '));
}
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

