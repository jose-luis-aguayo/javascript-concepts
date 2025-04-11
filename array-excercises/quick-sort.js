let a = [5,3,7,6,8,4,9]
let smallest = -1;
let pivot = a[3]; // 6


for(let i = 0; i < a.length; i ++){
    if(a[i] < pivot){
        smallest = a[i]
    } 
}