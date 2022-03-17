
function runProgram(input) { 
    input = input.trim().split('\n');
    let K = Number(input[0]);
    let arrival = input[1].trim().split(' ').map(Number);
    let depature = input[2].trim().split(' ').map(Number);
   // console.log(K,arrival,depature);
   if (manageMall(K,arrival,depature) == 1){
       console.log('Possible');
   }
   else {
       console.log("Not Possible")
   }


}
function manageMall(K,arrival,depature){
    let count = 0;
    let stack = [];
    for ( let i = 0; i < arrival.length; i++){
      if ( stack.length > 0 ){
          stack.sort((a,b) => {
              return b - a;
          })
      }
     // console.log(stack)
         while ( stack[stack.length - 1] < arrival[i] && stack.length > 0){
             count--;
             //console.log(count);
             stack.pop();
         }
         count++;
         if ( count > K){
            //  console.log(K)
            //  console.log(count);
             return 0;
         }
         stack.push(depature[i]);
    }
    return 1;
}

  if (process.env.USER === "aman") {
    runProgram(`2
    1 3 12
    11 6 13`);
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