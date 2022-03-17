
function runProgram(input) { 
    input = input.trim().split("\n");
    let arr = input[1].trim().split(' ').map(Number);
    console.log(minnimum_fare(arr));
}
function minnimum_fare(arr){
   let total_sum = 0;
   let minnimum_fr = arr[0];
 for ( let i = 0; i < arr.length; i++){
     minnimum_fr = Math.min(minnimum_fr,arr[i]);
     total_sum += minnimum_fr ;
    }
 return total_sum;
    
}

  if (process.env.USER === "aman") {
    runProgram(`5
    4 7 2 3 4`);
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