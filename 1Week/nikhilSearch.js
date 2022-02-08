
function runProgram(input) { 
    input = input.trim().split('\n');
    let arr = input[1].trim().split(' ').map(Number);
    let testCases = Number(input[2]);
    let line = 3;
    for ( let i = 0; i < testCases; i++){
       let [T,K] = input[line++].trim().split(' ').map(Number);
     if ( T == 0){
         console.log( soap(arr,K))

     }
       
    }

}


function soap(arr,K){
    let count = 0;
    let left = 0;
    let right = arr.length - 1;
    while ( left < right){
      let  mid = Math.floor((left + right)/2);
        if ( arr[mid] > K){
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
    runProgram(`4
    1 2 3 4
    3
    0 5
    1 3
    0 3`);
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