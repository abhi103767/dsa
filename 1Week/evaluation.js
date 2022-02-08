
function runProgram(input) { 
  input = input.trim();
  if ( unique(input) == 1) {
      console.log('No');
  }
  else {
      console.log("Yes");
  }
}

function unique(input){
    let arr = input.trim().split('');
  //  console.log(arr);
    let obj = {};
    for ( let i = 0; i < arr.length; i++){
        if (obj[arr[i]] === undefined){
          obj[arr[i]] = 1;
        }
        else {
            return 1;
        }

    }
  //  console.log(obj)
    return 0;
}

  if (process.env.USER === "aman") {
    runProgram(`masdi`);
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