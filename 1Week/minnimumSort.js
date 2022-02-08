
function runProgram(input) { 
    input = input.trim().split('\n');
let arr = input[1].trim().split(' ').map(Number);
//console.log(arr);
minnimumSort(arr);
}

function minnimumSort(arr){
    let left = 0;
    let right = arr.length - 1;
    let key = arr[0];
    while (left < right){
        let mid = Math.floor((left + right)/2);
        if ( arr[mid] < key ){
            key = arr[mid];
            right = mid;

        }

        else {

            left = mid + 1;
        }
    }
    console.log(key);
}

  if (process.env.USER === "aman") {
    runProgram(`10
   1 3 -1 2`);
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