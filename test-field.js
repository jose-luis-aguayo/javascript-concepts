function pivot(){
let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8 ,9]
];


//[a[1][0], a[0][1]] = [a[0][1], a[1][0]];

//pivot the array
for(let i = 1; i < a.length; i ++) {

    for(let j = 0; j < i ; j++){
        [a[i][j], a[j][i]] = [a[j][i], a[i][j]];
    }
}

console.log(a)

/**
 * 1, 0 i, j
 * 2, 0
 * 2, 1
 * 3, 0
 * 3, 1
 * 3, 2
 */

}

// let arr = ['{', '{', '[', '[', '(', '(', ')', ')', ']', ']', '}', '}' ];


// let mid = (arr.length / 2) - 1;

// let lastIndex = arr.length - 1;

// for(let i = 0; i <= mid; i ++){
//     console.log(arr[i], arr[lastIndex])
//     lastIndex --;
// }


// [0, 1, 2, 3, 4, 5] length = 6 / 2 = 3
// [0, 1, 2, 3, 4] length = 5 

// function reverseArray(arr){
//     let arrLength = arr.length;
//     let mid = 0;

//     mid = Math.floor((arrLength / 2) - 1);

//     for(let i = 0; i <= mid; i++) {
//         [arr[i], arr[arrLength - 1]] = [arr[arrLength - 1], arr[i]]
//         arrLength--;
//     }

//     return arr;

// }

// console.log(reverseArray([1,2,3,4,5,6]))


//return index of unique char otherwise return -1
function firstUniqueChar(a){
    let uniqueCharFound = false;

    for(let i = 0; i < a.length; i ++){
        
        for(let j = 0; j < a.length; j ++){

            
            if(i == j) continue;

            if(a[i] == a[j]) break;

            if(j == a.length - 1) {
                uniqueCharFound = true
            }

            console.log(`comparision ${a[i]} == ${a[j]} ${uniqueCharFound}`)
            
        }

        if(uniqueCharFound) {
            return i
        }

    }
    return -1
}

console.log(firstUniqueChar('abbac'));


