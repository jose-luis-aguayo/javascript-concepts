function binarySearch(arr, target, start = 0, end = arr.lengt -1 ){
    let mid = ~~((start + end) / 2);

    if(start > end){
        return -1;
    }

    if(target === arr[mid]){
        return mid;
    } else if (target > arr[mid]){
        return binarySearch(arr, target, mid + 1, end);
    } else {
        return binarySearch(arr, target, start, mid -1);
    }
}