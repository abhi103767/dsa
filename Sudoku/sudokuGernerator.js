let sudoku_validNumber = [1,2,3,4,5,6,7,8,9];



let sudoku  = [];
let firstRow = [];
function gettingFilledFirstRowOfSudoku(){
    let randomIndex = Math.floor(Math.random()*sudoku_validNumber.length);
    // console.log(randomIndex);

    // console.log(sudoku_validNumber[randomIndex]);
    firstRow.push(sudoku_validNumber[randomIndex])
    sudoku_validNumber.splice(randomIndex,1);
    // console.log(sudoku_validNumber);
    // console.log('--------------');

}


for ( let i = 0; i <= 8; i++){
    gettingFilledFirstRowOfSudoku();
}
console.log(firstRow);

sudoku.push(firstRow);




for ( let i = 1; i < 9; i++){
    let x = [];
    for ( let j = 0; j < 9; j++){
      x.push(0);
    }
    sudoku.push(x);
}
console.log(sudoku);

// sudoku[3][2] = 1 ;


findingSudokuGrid(0);





function findingSudokuGrid(count){
    if( count === 72){
        console.log('---------------------------')
 sudoku.forEach((row) => console.log(row.join(' ')));
 return;
    }
     
    for ( let i = 0; i < 9; i++){
        for ( let j = 0; j < 9; j++){
            if(sudoku[i][j] === 0){
                for ( let k = 1;  k <= 9; k++){ 
             //console.log(count);
                sudoku[i][j] = k; 
                   if( !checkingSudoku(i,j,k)){
                       if(k === 9){
                        sudoku[i][j] = 0;
                        return;
                       }
                      sudoku[i][j] = 0;
                      continue;
                   }
                   
                    findingSudokuGrid(count+1);
                   if(k === 9) {
                    sudoku[i][j] = 0;
                       return ;
                   }
                    sudoku[i][j] = 0;
                }
            
               
            }
        }
    }
}

// console.log(checkingSudoku(0,0,1));

function checkingSudoku(row,col,num){
    for ( let i = 0; i < 9 ; i++){
        // console.log(sudoku_new[row][i])
         if( sudoku[row][i] === num && i != col) {
            return false;
         }
      };

      for ( let i = 0; i < 9 ; i++){
        // console.log(sudoku_new[i][col]);
        if( sudoku[i][col] === num &&  i != row) {
           return false;
        }
        
     };

     let  r = Math.floor(row/3)*3;
     let  c = Math.floor(col/3)*3;
       for ( let i = r; i < r+3; i++){
         for ( let j = c ; j <  c + 3; j++){
          // console.log(sudoku[i][j]);
           if(sudoku[i][j] === num && i !== row && j !== col){
             return false;
           }
         }
       }


       return true;

}