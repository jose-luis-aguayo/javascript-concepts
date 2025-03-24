function gridChallenge(grid = ['uxf', 'vof', 'hmp']) {
   // Write your code here
   
    
   for(let i = 0; i < grid.length; i ++) { //sorting the grid
       grid[i] = grid[i].split('').sort();
   }
   
   console.log(grid);
   for(let i = 1; i < grid.length; i ++){ //pivot the array
        for(let j = 0; j < i; j ++){
            [grid[i][j], grid[j][i]] = [grid[j][i], grid[i][j]];
        }
   }
   console.log(grid);
   for(let i = 0; i < grid.length; i ++){
        let row = grid[i].join('');
        let sortedRow = grid[i].sort().join('');

        console.log(`${row} == ${sortedRow}`)

        if(row != sortedRow){
            return 'NO'
        } 
   }

   return 'YES'

}

console.log(gridChallenge())

