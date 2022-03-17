
function runProgram(input) { 
    input = input.trim().split('\n');
    let testCases = Number(input[0]);
    let line = 1;
    for ( let i = 0; i < testCases; i++){
        let K = Number(input[line++]);
        let arr = input[line++].trim().split(' ').map(Number);
        let index = fit(K,arr);
        if ( index == 0 ) {
            console.log("Front "+ arr[index]);
        }
        else if ( index > 0 && index < arr.length){
            console.log(arr[index-1]+ " " + arr[index]);
        }
        else {
            console.log("Last " + arr[index - 1]);
        }
    }

}

function fit(K,arr){
    let low = 0;
    let high = arr.length - 1;

  if ( arr[arr.length - 1] <= K){
      return arr.length;
  }
    while ( low < high){
       let mid = Math.floor((low+high)/2);
        if ( arr[mid] >= K){
            high = mid;
        }
        else {
            low = mid + 1;
        }
       
    }
    return low;
}

  if (process.env.USER === "aman") {
    runProgram(`3
3
1 4 5 6 8 9
12
1 2 6 7 11
1
2 3 4 5 6`);
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



  while(each < end ){
    if ( i == 0){

    }

  }

  while(each < end){
    start++;
    end--;
  }

