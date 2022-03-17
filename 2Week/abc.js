
function runProgram(input) { 
    input = input.trim().split('\n');
    let arr = input[1].trim().split(' ').map(Number);
    let K = Number(input[2]);
    console.log(lowerbound(arr,K),upperbound(arr,K) - 1,upperbound(arr,K) - lowerbound(arr,K));

}

function lowerbound(arr,K){
    let low = 0;
    let high = arr.length - 1;
    while ( low < high){
        let mid = Math.floor((low+high)/2);
     if ( arr[mid] >= K){
         high = mid;
     }
     else {
         low = mid + 1;
     }
    }
    return low;
}

function upperbound(arr,K){
    let low = 0;
    let high = arr.length - 1;
    while ( low < high){
        let mid = Math.floor((low+high)/2);
     if ( arr[mid] > K){
         high = mid;
     }
     else {
         low = mid + 1;
     }
    }
   
    if ( low === arr.length - 1){
        return low + 1
    }
    return low;
}

  if (process.env.USER === "aman") {
    runProgram(`5
    1 2 3 4 5
    5`);
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