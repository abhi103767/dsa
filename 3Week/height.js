
function runProgram(input) { 
    input = input.trim().split('\n');
    let arr = input[1].trim().split(' ').map(Number);
    let dp = [];
    for ( let i = 0; i < arr.length; i++){
         dp.push(1);
    }
   count(dp,arr);
}
// 10 22 9 33 21 50 41 60 80

function count(dp,arr){
  //  console.log(arr);
    for ( let i = 1 ; i < arr.length; i++){
        for ( let j = 0; j < i; j++){
         if (arr[i] > arr[j]){
           //  console.log(i)
              //console.log(dp)
              dp[i]  = Math.max(dp[i],dp[j] + 1);
            }
        }
    }
    //console.log(dp)

    let max = 0;
    for ( let i  = 0; i < dp.length;i++){
        max = Math.max(dp[i],max);
    }
    console.log(max);
}

  if (process.env.USER === "aman") {
    runProgram(`9
    10 22 9 33 21 50 41 60 80`);
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