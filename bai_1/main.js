function max(arr) {
     arr = [4,6,8,10,5,7,9];
    for (let i = 0;i < arr.length;i++) {
        for (let j = i+1;j<arr.length;j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] =temp;
            }
        }

    }
    console.log(arr[arr.length-3]);
}
max();