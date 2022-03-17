
function runProgram(input) { 
    input = input.trim().split('\n');
    let [N,K] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);
  console.log(sumOfSubArray(N,K,arr));
}

function sumOfSubArray(N,K,arr){
    let hashingOfRemainder = {0:1};
    let ans  = 0;
   let sum = 0;
  console.log(arr);
    for ( let i  = 0;i < N; i++){
        sum += arr[i];
    let rem = sum % K;
        if ( !hashingOfRemainder[rem]) {
            hashingOfRemainder[rem] = 1;
        }
        else {
            hashingOfRemainder[rem] = 1 + hashingOfRemainder[rem];
            ans += hashingOfRemainder[rem]-1;
        }
       
    }
    console.log(hashingOfRemainder)
    return ans;

}

  if (process.env.USER === "aman") {
    runProgram(`4 2
    2 3 4 6 6`);
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