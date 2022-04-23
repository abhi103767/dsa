let chess = [];
let max = 0;
let ans  = [];
let num = 1;
function runProgram(input) { 
   let N = +input;
   for (let i = 0; i < N; i++){
       let x = [];
       for ( let j = 0; j < N; j++){
           x.push(0);
       }
       chess.push(x);
   }
  // console.log(chess);
//    placingQueen(1,0,4)
//    rearrangeInOriginalPosition(1,0,4);
 // chess.forEach((item) => console.log(item.join(' ')));
 Nqueen(0,N,0)
 console.log(ans.length);


}

function Nqueen(index,N,perv){
   
  if( index == N) {
    console.log("-----------")
    chess.forEach((row) => console.log(row.join(' ')));
   
    ans.push(1);
    return;
  }
  
  for ( let i = 0; i < N; i++){


    if(chess[index][i] === 0){
    perv = chess.map((row)=> row.map((item) => item));
  //console.log(perv);
    placingQueen(index,i,N);
    Nqueen(index+1,N,perv);
    chess = perv;
    //console.log(chess);
    }
     
    
  }
}
   





function placingQueen(x,y,N){

  chess[x][y] = "Q";
 // console.log(chess);
  for ( let i = 0; i < N; i++){
    for ( let j = 0; j < N; j++){
      if(i == x) {
        if(j != y)   chess[i][j] = 1;
      }
      if( j == y){
        if(i != x) chess[i][j] = 1;
      }
      if( i-j == x - y && i != x && j != y ) chess[i][j] = 1;
      if(i+j == x + y && i != x && j != y) chess[i][j] = 1;
    }
  }
//  console.log(chess);
}


function check(N){
//  console.log(chess);
  for ( let i = 0; i < N ; i++){
    for ( let j = 0; j < N; j++){
      if(chess[i][j]  == 0) return false;
    }
  }
  return true; 
}

function rearrangeInOriginalPosition(x,y,N){
  
  chess[x][y] = 0;
  for ( let i = 0; i < N; i++){
    for ( let j = 0; j < N; j++){
      if(i == x) {
        if(j != y)   chess[i][j] = 0;
      }
      if( j == y){
        if(i != x) chess[i][j] = 0;
      }
      if( i-j === x - y && i != x && j != y ) chess[i][j] = 0;
      if(i+j === x + y && i != x && j != y) chess[i][j] = 0;
    }
  }
}

  if (process.env.USER === "aman") {
    runProgram(`15`);
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