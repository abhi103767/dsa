
function runProgram(input) { 
    input = input.trim().split('\n');
   let [N,K] = input[0].trim().split(' ').map(Number);
   let arr = input[1].trim().split(' ').map(Number);
   occurence(N,K,arr);
}
function occurence(N,K,arr){
    let left = 0;
    let right = arr.length - 1;
    while ( left <= right){
      let mid = Math.floor((left + right) / 2);
      if ( arr[mid] == K){
          let count = 1;
          let left_equal = mid - 1;
          let right_equal = mid + 1;
          while ( arr[left_equal] == K ){
              left_equal--;
             count++;
          }
          while ( arr[right_equal] == K){
              right_equal++;
              count++;
          }
          console.log(count);
          return ;     

      }
      if ( arr[mid] < K){
         left = mid + 1;
      }
      else {
          right = mid - 1;
      }
    }
}
  if (process.env.USER === "aman") {
    runProgram(`6 6
     6 6 3 3 6`);
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