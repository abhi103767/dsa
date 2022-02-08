
function runProgram(input) { 
    input = input.trim().split('\n');
    let [N,K] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);
   console.log(upperbound(K,arr));
}
function upperbound(K,arr){
    let left = 0;
    let right = arr.length - 1;
    while ( left <= right){
        let mid = Math.floor((left+right)/2);
        if ( arr[mid] == K){
            while ( arr[mid] == K){
                mid++;
            }
            return --mid;
        }
        if ( arr[mid] < K){
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}

  if (process.env.USER === "aman") {
    runProgram(`10 7
    0 2 4 4 5 7 7 7 7 7`);
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