
function runProgram(input) { 
    input = input.trim().split('\n');
    let arr = input[1].trim().split(' ').map(Number);
     count(arr);
}
function count(arr){
  let obj  = {};

  for ( let i = 0; i < arr.length; i++){
      if ( obj[arr[i]] == undefined){
          obj[arr[i]] = 1;
      }
      else {
          obj[arr[i]] = obj[arr[i]]+1;
      }
  }
  let str = '';
  for ( key in obj ){
      str += obj[key]+ " ";
  }
  console.log(str);
}


  if (process.env.USER === "aman") {
    runProgram(`10
    0 1 0 1 1 1 0 2 2 0 `);
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