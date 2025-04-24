/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let max = 0;

    let left = 0;
    let right = height.length - 1;

    while(left < right){
        let n1 = right - left;
        let n2 = 0;

        if(height[left] > height[right]){
            n2 = height[right];   
            right --; 
        } else {
            n2 = height[left];
            left ++;
        }

        let result = n1 * n2;

        if(result > max){
            max = result;
        }
    }

    return max;
};