let ans = [];
let isflag = false;
let matrix = [] ;
function runProgram(input) { 
    input = input.trim().split('\n');
    let sudoku = []
    let rows = +input.length;
   // console.log(matrix);
    for ( let i = 0; i < rows; i++){
        let x = input[i].trim().split(' ').map(Number);
        sudoku.push(x);
    }
   // console.log(sudoku);
   //console.log(matrix);

 
    let zeros = [];
   
    

    for ( let i = 0; i < 9; i++){
        for ( let j = 0; j < 9; j++){
            if(sudoku[i][j] === 0){
               
             zeros.push([i,j]);
            }
            
        }

    }

   // console.log(zeros);
    finding(0,zeros,sudoku);
    //console.log(ans)
   // console.log(isflag);

//console.log("modified" + matrix);

let newMatrix = [];
for ( let i = 0; i < 9; i++){
  if(ans.length === 1)  newMatrix.push(matrix[i].split('').map(Number));
}
//console.log(newMatrix);
    
     solution(newMatrix);
     
     
     function solution(matrix){
   // console.log(ans.length);
    if(ans.length ==1) {
       // console.log(ans.length);

for ( let i = 0; i < 9; i++){
    console.log(matrix[i].join(' '));
}
}
else console.log(-1);
    
}
}

function finding(cur,zeros,sudoku){
   
  // console.log(zeros);
    if( cur === zeros.length) {
        ans.push(1);
   //  console.log(sudoku);

   for ( let i = 0; i < 9; i++){
       let x = sudoku[i].join('');
       matrix.push(x);
   }
    // console.log(matrix);
    // console.log(matrix[0]);
   //  console.log(sudoku);
    // console.log(matrix);
    
       return;
    }
  let [x,y] = zeros[cur];
 // console.log(x,y)
    for ( let i = 1; i < 10; i++){
          sudoku[x][y] = i;
        //console.log(validator(x,y,i,sudoku))
          if(validator(x,y,i,sudoku)) finding(cur+1,zeros,sudoku);
    }
    sudoku[x][y] = 0;
    

}


function validator(x,y,num,sudoku){
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

