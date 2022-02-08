
function runProgram(input) { 
    input = input.trim().split('\n');
    let [N,K] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);
    console.log(sort(K,arr));
}


function minnimumSort(arr){
    let left = 0;
    let right = arr.length - 1;
    let key = arr[0];
    while (left < right){
        let mid = Math.floor((left + right)/2);
        if ( arr[mid]  < key ){
            key = arr[mid];
            right = mid;

        }

        else {

            left = mid + 1;
        }
    }
    return left;
}



function sort(K,arr){
let left = 0;
let right = arr.length - 1;
let piv = minnimumSort(arr);
//console.log(piv);
    if ( arr[0] >  K){
        left = piv;
    }
    else {
        right = piv - 1;
    }
  //console.log(left,right);
    while ( left <= right){
        let mid = Math.floor((left + right)/2);
        if ( arr[mid] == K) {
            return mid;
        }

       else if  ( arr[mid] < K){
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return  -1;

}

  if (process.env.USER === "aman") {
    runProgram(`5 1
    3 4 5 1 2`);
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