let count = 0;
function runProgram(input) { 
    input = input.trim().split('\n');
    let [K,N] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);
    arr.sort((a,b) => {
        return a - b;
    })
    recursive(N,arr,0);
    console.log(--count);
    

}
function recursive(N,arr,cur){

    if ( N < 0){
       return ;
    }
    count++;
    recursive(N - arr[cur],arr,cur+1)
    
}
  if (process.env.USER === "aman") {
    runProgram(`4 10
    5 4 2 4`);
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