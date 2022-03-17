
function runProgram(input) { 
    input = input.trim().split('\n');
    let testCases = Number(input[0]);
    let line = 1;
  

    for ( let i = 0; i < testCases; i++){
        let matrix = [];
      //  console.log(line);
      let [rows,cols] = input[line++].trim().split(' ').map(Number);
    //console.log(rows,cols);
     for ( j = 0; j < rows; j++){
         matrix.push(input[line++].trim().split(' ').map(Number));
     }
     mat(matrix,rows);
    };

}
function mat(matrix){
    let rows = matrix.length;
    //console.log(rows)
    let cols = matrix[0].length;
    //console.log(cols)
    let max = Math.max();

    let dp = [];
    for ( let i = 0; i < rows; i++){
        dp.push([]);
    }
    //console.log(dp);


    for ( let i = 0; i < rows; i++){
        for ( let j = 0; j < cols; j++){
           if ( i == 0){
               dp[i][j] = matrix[i][j];
           }
        else if ( j == 0){
             dp[i][j] = matrix[i][j] + Math.max(dp[i-1][j],dp[i-1][j+1]);
         }
         else if ( j == cols - 1){
            dp[i][j] = matrix[i][j] + Math.max(dp[i-1][j],dp[i-1][j-1]);
         }
         else {
            dp[i][j] =  matrix[i][j] + Math.max(dp[i-1][j-1],dp[i-1][j],dp[i-1][j+1]);
         }

         if ( i == rows - 1){
             max = Math.max(dp[i][j],max);
         }
      }
    }
        
    console.log(max);
}


  if (process.env.USER === "aman") {
    runProgram(`2
    6 5
    3 1 7 4 2
    2 1 3 1 1
    1 2 2 1 8
    2 2 1 5 3
    2 1 4 4 4
    5 2 7 5 1
    2 3
    1 2 3
    4 5 6`);
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