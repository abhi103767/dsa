
function runProgram(input) { 
    input = input.trim().split('\n');
    let testCases = Number(input[0]);
    let line = 2;
    for ( let i = 0; i < testCases; i++){
      let boy_length = input[line++].trim().split(' ').map(Number);
      boy_length.sort((a,b) => {
          return a - b;
      })
      let girl_length = input[line++].trim().split(' ').map(Number);
      girl_length.sort((a,b) => {
        return a - b;
    })
      line++;
      //console.log( height(boy_length,girl_length));
      if ( height(boy_length,girl_length) == 1){
          console.log('YES');
      }
      else {
          console.log("NO");
      }
      
    }
   
}

function height(boy_length,girl_length){
    let left = 0;
    let right = 0

    while ( left < boy_length.length && right < girl_length.length){
        if ( boy_length[left] > girl_length[right]) {
            left++;
            right++;
        }
        else {
            return 0;
        }
    }
    return 1;

}
  if (process.env.USER === "aman") {
    runProgram(`1
    4 5
    2 5 6 8
    3 8 5 1 7`);
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