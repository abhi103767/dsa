

function runProgram(input) { 
  N = Number(input);
  let dp = [];
   dp[0] = 0;
   dp[1] = 1;

  console.log(ways(N,dp));
  
}
function ways(N,dp){
   if ( N == 0 ){
     return dp[1];
   }
   if ( N < 0){
     return dp[0]
   }
console.log(dp);
   if ( dp[N] != undefined){
     return dp[N];
   }
   else {
     dp[N] = ways(N -1,dp) + ways(N - 2,dp) + ways(N - 3,dp);
   }

   return dp[N];
  

}

  if (process.env.USER === "aman") {
    runProgram(`3`);
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