
function runProgram(input) { 
    input = input.trim().split('\n');
    let [N,K] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);
   console.log(arr[lowerbound(K,arr)]);
   console.log(arr[upperbound(K,arr)] - arr[lowerbound(K,arr)]);

   

}
function lowerbound(K,arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let mid = Math.floor((left+right)/2);

        if ( arr[mid] >= K){
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}

function upperbound(K,arr){
  let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let mid = Math.floor((left+right)/2);

        if ( arr[mid] > K){
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;

}

  if (process.env.USER === "aman") {
    runProgram(`5 2
    1 1 2 2 5`);
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