function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    let mid = ~~((start + end) / 2); //4
    
    //console.log(`start ${start} end ${end} mid ${mid} array${arr.slice(start, end)}`)

    if (start > end) {
        return -1;
    }

    if (arr[mid] === target) {
        return mid;
    } else if (target > arr[mid]) {
        
        return binarySearch(arr, target, mid + 1, end);
    } else {
        
        return binarySearch(arr, target, start, mid - 1);
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // length 10 
const target = 2;
const result = binarySearch(arr, target);
console.log(result); 


//number of times repeated: 1, 2, 3, 4, 5