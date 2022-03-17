
function runProgram(input) { 
    input = input.trim().split('\n');
    let testCases = Number(input[0]);
    let line = 2;
    for ( let i = 0; i < testCases ; i++){
        let ash = input[line++].trim().split(' ').map(Number);
        let gary = input[line++].trim().split(' ').map(Number);
        ash.sort((a,b) => {
            return b - a;
        });
        gary.sort((a,b) => {
            return b - a;
        })
        line++;
       // console.log(count(ash,gary));
        if ( count(ash,gary) == 1){
            console.log("Ash Finally Wins");
        }
        if ( count(ash,gary) == 0){
            console.log("Train Hard Again")
        }
    }
}

function count(ash,gary){
     for  (let i = 0; i < ash.length; i++){
       if ( ash[i] <= gary[i]){
           return 0;
       }
    }
    return 1;
}

  if (process.env.USER === "aman") {
    runProgram(`2
    3
    12 3 4
    5 4 1
    2
    1 5
    0 4`);
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