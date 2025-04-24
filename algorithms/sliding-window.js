
//time complexity O(n * k)
function findMaxAverage(nums, k){
    let left = 0;
    let right = k - 1;

    for(; right < nums.length; right ++){
        
        for(let j = left; j <= right; j ++){
            console.log(` ${left} window`)
        }
        left ++;
        
    }
    
}


findMaxAverage([1, 2, 3, 4, 5, 6],  3);

function dynamicWindow(s){
    let word = '';
    let left = 0;
    let right = 0;

    
}

dynamicWindow('abcdbcbb');
