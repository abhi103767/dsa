
function runProgram(input) { 
    input = input.trim().split('\n');
    let arr = input[1].trim().split(' ').map(Number);
    arr.sort((a,b) => {
        return b - a;
    })
  //  console.log(arr);
    console.log(angry(arr));

}

function angry(arr){
 let max = -1;
    for ( let i = 0; i < arr.length - 1; i++){
  if ( i  == arr.length - 2){
      let dif = arr[i] - arr[i+1];
     //console.log(dif);
      max = Math.max(max,dif);
  }
 else  if ( i == 0){
      let dif = arr[i] - arr[i+1];
     // console.log(dif);
      max = Math.max(max,dif);
      dif = arr[i] - arr[i+2];
     // console.log(dif)
      max = Math.max(max,dif);
  }
  else {
      let dif = arr[i] - arr[i+2];
     // console.log(dif);
      max = Math.max(max,dif)
  }
}
  return max;

    
}
  if (process.env.USER === "aman") {
    runProgram(`4
5 10 2 12 8 4`);
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