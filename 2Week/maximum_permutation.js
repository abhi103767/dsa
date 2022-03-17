
function runProgram(input) { 
    input = input.trim().split('\n');
   
    let arr = input[1].trim().split(' ').map(Number);
    arr.sort((a,b) => {
        return a - b;
    })
  //  console.log(arr);
   console.log( maximum(arr));

}

function maximum(arr){
    let sum = 0;
    for ( let i = 0; i < arr.length; i++){
        sum += i*arr[i];
    }
    return sum;
}
  if (process.env.USER === "aman") {
    runProgram(`4
2 5 1 6`);
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