
function runProgram(input) { 
     input = input.trim().split('\n');
    let N = +input[0];
    let arr = input[1].trim().split(' ').map(Number);
    let K = +input[2];
   if (sum_exit(arr,K,0,[]) == 1){
       console.log("Yes");
   }
   else {
       console.log("No");
   }
}

function sum_exit(arr,K,cur,ans){
    if ( ans.length > 0 ){
       let sum = 0;
       for ( let i = 0; i < ans.length; i++){
           sum += ans[i];
        
       }
       if ( sum == K){
           return 1;
       }
    }

    if ( cur == arr.length ){
        return;
    }

    for ( let i = cur ; i < arr.length; i++){
        ans.push(arr[i]);
        if (sum_exit(arr,K,i+1,ans) == 1){
            return 1;
        }
        ans.pop();
    }

}

  if (process.env.USER === "aman") {
    runProgram(`9
     1 2 1
    5`);
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