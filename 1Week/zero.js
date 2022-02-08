
function runProgram(input) { 
    input = input.trim().split('\n');
    let testCases = Number(input[0]);
   let line = 1;

    for ( let i = 0; i < testCases; i++){
   let [a,b,c,K] = input[line++].trim().split(' ').map(Number);
    console.log(algerabic(a,b,c,K));
    }
    
}

function findY(a,b,c,x){
    return a*(x*x) + b*(x) + c;
}
function algerabic(a,b,c,K){
    let left = 0;
    let right = K;
    let value = 0;
    let mid = 0;
    if ( c > K){
        return -1;
    }
    while ( left < right){
         mid = Math.floor((left+right)/2);
         value = findY(a,b,c,mid);
        if ( value >= K ){
          right = mid;
        }
        else {
            left = mid + 1;
        }
    }
 return left;
}
  if (process.env.USER === "aman") {
    runProgram(`1
    3 2 4 15`);
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
  };
