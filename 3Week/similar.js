
function runProgram(input) { 
    input = input.trim().split('\n');
    let arr1 = input[0].trim().split('');
    let arr2 = input[1].trim().split('');
   

    arr1.sort((a,b) => {
         if ( b > a){
             return -1;
         }
    })
    arr2.sort((a,b) => {
        if ( b > a){
            return -1;
        }
    })
    console.log(arr1.join(''));
    console.log(arr2.join(''));
    //console.log(arr1,arr2);
    console.log(similar(arr1,arr2));
}

function similar(arr1,arr2){
    let count = 0;
    let i = 0;
    let j = 0;
    while ( i < arr1.length && j < arr2.length ){
        //console.log(i,j);
        if ( arr1[i] == arr2[j]){
            count++;
            console.log(arr1[i],arr2[j]);
            i++;
            j++;
        }
      else  if ( arr1[i] > arr2[j]){
            j++;
        }
        else {
            i++;
        }
    }
    return count;
}

  if (process.env.USER === "aman") {
    runProgram(`eziowiomkvrrdzx
    orugiebaolddavd`);
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