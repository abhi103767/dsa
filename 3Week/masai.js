
function runProgram(input) { 
    input = input.trim().split('\n');
   let testCases = input.length;
   let line = 0;
 
   for ( let i = 0; i < testCases; i++){
      let N = Number(input[line++]);
      let arr = [0,1,2,3,4,5];
     console.log( masaimontary(N,arr));
   }
}

function masaimontary(N,arr){
    // console.log(arr);
    if ( N <= 5){
        return arr[N];
    }


    if ( arr[N] != undefined){
        return arr[N];
    }
    else {
        arr[N] =  Math.max(masaimontary(Math.floor(N/3),arr) + masaimontary(Math.floor(N/2),arr) + masaimontary(Math.floor(N/4),arr), N)
    }
    return arr[N];

}

  if (process.env.USER === "aman") {
    runProgram(`12
    2`);
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

