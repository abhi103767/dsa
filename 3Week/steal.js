
function runProgram(input) { 
    input = input.trim().split('\n');
    let total_weight = +input[0];
    let price = input[2].trim().split(' ').map(Number);
    let weight = input[3].trim().split(' ').map(Number);
    actual_price(total_weight,price,weight);
}
function swap(arr,i,j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;    
}

function sort(arr){

    for  ( let i = 0; i < arr.length; i++){
        for ( let j = i; j < arr.length - i - 1; j++){
            if ( arr[i] < arr[i+1]){
               swap(arr,i,i+1);
            //    swap(arr1,i,i+1);
            //    swap(arr2,i,i+1);
            }
        }
    }
}

function actual_price(total_weight,price,weight){
    let price_weight = [];
    for ( let i = 0; i < price.length; i++){
        price_weight.push(price[i]/weight[i]);
    }
  price_weight.push(1);
   sort(price_weight);;
   console.log(price_weight);
  console.log(price_weight);


}
  if (process.env.USER === "aman") {
    runProgram(`50 
    3
    60 100 120 
    10 20 30`);
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