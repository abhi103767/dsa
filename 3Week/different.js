let sum = 0;
function runProgram(input) { 
    let N = Number(input);
   let arr = [];
  arr[0] = 0;
  arr[1] = 1;

   console.log(ways(N,arr));
   //console.log(sum)
 // console.log(ways(N,dp,0));

}
function ways(N,arr){
   if ( N  == 0){
       return arr[1];
   }
   else if ( N < 0){
       return arr[0];
   }
  // console.log(arr);

   if ( arr[N] != undefined){
        return arr[N];
   }
   else {
      arr[N] = Number(ways(N-1,arr)) + Number(ways(N-3,arr)) + Number(ways(N-4,arr));
   }

   return arr[N];

  }

  if (process.env.USER === "aman") {
    runProgram(`5`);
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