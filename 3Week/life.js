
function runProgram(input) { 
    input = input.trim().split("\n");
    let arr = input[1].trim().split(' ').map(Number);
    console.log(life(arr));
}

function life(arr) {
    for ( let i = 0; i < arr.length; i++){
     if ( arr[i] == 1){
         return i;
     }
    }
    return -1;
}

  if (process.env.USER === "aman") {
    runProgram(`5
    0 0 0 0 0`);
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