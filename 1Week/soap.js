
function runProgram(input) {
    input = input.trim().split('\n');
    let arr = input[1].trim().split(' ').map(Number);
    let testCases = Number(input[2]);
    let line = 3;
    arr.sort((a,b) => {
        return a - b;
    });
    for ( let i = 0; i < testCases; i++){
        let K = Number(input[line++]);
       console.log(soap(arr,K));
    }
}

function soap(arr,K){
    let count = 0;
    let left = 0;
    let right = arr.length - 1;
    while ( left < right){
      let  mid = Math.floor((left + right)/2);
        if ( arr[mid] >= K){
      right = mid;
        }
        else {
            left = mid + 1;
        }
       
    }
    if ( left === arr.length - 1){
        return left+1;
    }
    if ( left === 0){
        return 0;
    }
    return left;
   
}
  if (process.env.USER === "aman") {
    runProgram(`5
    1 4 10 5 6
    4
    2
    3
    5
    0`);
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