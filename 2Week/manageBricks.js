
function runProgram(input) { 
    input = input.trim().split('\n');
    let testCases = Number(input[0]);

}

  if (process.env.USER === "aman") {
    runProgram(`1
    3
    6
    4
    3 1
    1 2
    1 2`);
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