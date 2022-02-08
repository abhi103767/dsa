
function runProgram(input) { 
    input = input.trim().split('\n');
    let arr = input[1].trim().split(' ').map(Number);
    let line = 2;
    for ( let i = 2; i < input.length ; i++ ){
        console.log( query(arr,input[line++]));
    }
}
function query(arr,K){
   for ( let i = 0; i < arr.length ; i++){
       if ( arr[i] == K){
           return 'YES';
       }
      
   }
   return 'NO';
}

  if (process.env.USER === "aman") {
    runProgram(`5 10
    50 40 30 20 10
    10
    20
    30
    40
    50
    60
    70
    80
    90
    100`);
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