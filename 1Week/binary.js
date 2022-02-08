
function runProgram(input) { 
    input  = input.trim().split('\n');
   let  [N,K] = input[0].trim().split(' ').map(Number);
   let arr = input[1].trim().split(' ').map(Number);
    console.log(binary(K,arr));
}
function binary(K,arr){
    
    for ( let i = 0; i < arr.length; i++){
        if ( arr[i] == K){
            return 1;
        }
    }

    return 0;
}

  if (process.env.USER === "aman") {
    runProgram(`5 0
    2 -2 0 3 4`);
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