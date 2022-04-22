function tryRemoveFromArray(arr,index) {
    for (let i = index;i < arr.length;i++) {
        arr[i] = arr[i +1];
    }
    arr.length = arr.length - 1;
    return arr;
}
tryRemoveFromArray();