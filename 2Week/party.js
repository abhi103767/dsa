
function runProgram(input) { 
    input = input.trim().split('\n');
    let [N,T,K] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);
    arr.sort((a , b) => {
        return a - b;
    })
   if ( party(N,T,K,arr) == 1){
       console.log("Party");
   }
   else {
       console.log("Sad");
   }

}
function party(N,T,K,arr){
    let sum = 0;
    for ( let i = 0; i < T; i++){
         sum += arr[i];
    }
    if ( sum <= K){
        return 1;
    }
    return 0;

}
  if (process.env.USER === "aman") {
    runProgram(`5 3 23
    6 4 21 20 13`);
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