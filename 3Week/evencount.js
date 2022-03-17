
function runProgram(input) { 
    input = input.trim().split('\n');
    let testCases = Number(input[0]);
    let line = 1;
    for ( let i = 0; i < testCases; i++){
      let [N,K] = input[line++].trim().split(' ').map(Number);
      let arr = input[line++].trim().split(' ').map(Number);
      console.log(arr);

      arr.sort((a,b) => {
          return b - a;
      })
    count(arr,K);
    }
}
function count(arr,K){
    let rank = [];
    let pervious  = '';
    for ( let i = 0; i < arr.length; i++){
    
    if ( pervious == arr[i]){
        rank.push(rank[rank.length - 1]);
    }
    else {
        rank.push(i+1);
    }
     pervious = arr[i];
    }

    let count = 0;
    for ( let i = 0; i < rank.length; i++){
      if ( rank[i] <= K){
          count++;
      }
    }
    console.log(count);
}

  if (process.env.USER === "aman") {
    runProgram(`2
    5 3
    2 2 2 2 1 3 5 3 2 3
    5 5
    2 2 2 2 1`);
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