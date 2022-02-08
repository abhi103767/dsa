
function runProgram(input) { 
 let K = Number(input);
 square_root(K);
}

function square_root(K){
  let left = 0;
  let right = K;
  let percision = 0.000000000000001;
  let  mid = (left + right)/2;
  while ( right - left > percision){
        mid = (left + right)/2;
    if ( mid*mid > K ){
        right = mid ;
    }
    else {
        left =  mid;
    }
    
  }
  console.log(Math.floor(mid));
}


  if (process.env.USER === "aman") {
    runProgram(`36`);
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