
function runProgram(input) { 

    let N = +input;
    console.log(fibo(N));
    

}
function fibo(N){
    if(N == 1 || N == 0) return N;
    return fibo(N-1)+fibo(N-2);
}

  if (process.env.USER === "aman") {
    runProgram(`46`);
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