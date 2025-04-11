function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    let mid = ~~((start + end) / 2); //5

    if (start > end) {
        return -1;
    }

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, end);
    } else {
        return binarySearch(arr, target, start, mid - 1);
    }
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 1;
const result = binarySearch(arr, target);
console.log(result); // Output: 6