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




let a = [1,2, 3];
let b = [4, 5, 6];

let result = [a, b].flat();


console.log(result.sort((a, b) => a - b));