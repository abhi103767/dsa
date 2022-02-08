
function runProgram(input) { 
    input  = Number(input);
    console.log(square_root(input));

}
function square_root(input){
let left  = 0;
let right  = 35;
let K = 64;
 while ( left <= right) {
    let mid = Math.floor((left+right)/2);
    // console.log(left , right)
    // console.log(mid)

    if ( (mid)* mid == K ){
        return mid;
    }
    else if ( mid*mid > K){
        right = mid - 1;
    }
    else {
        left = mid + 1;
    }
    
 }
}

  if (process.env.USER === "aman") {
    runProgram(`4`);
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