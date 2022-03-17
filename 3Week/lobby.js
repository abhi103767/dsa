
function runProgram(input) { 
    input = input.trim().split("\n");
    let student_position = input[1].trim().split(" ").map(Number);
    let room_position = input[2].trim().split(' ').map(Number);
    student_position.sort((a,b) => {
        return a - b
    })

    room_position.sort((a,b) => {
        return a - b;
    })
  // console.log(student_position,room_position)
    console.log(lobby(student_position,room_position));


}

function lobby(student_position,room_position){
    let max = 0;

    for ( let i = 0; i < student_position.length; i++){
        max = Math.max(max,Math.abs(student_position[i] - room_position[i]));
    }
    return max;
}

  if (process.env.USER === "aman") {
    runProgram(`3
    4 -4 2
    4 0 5`);
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