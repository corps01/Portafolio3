let array = [47,7,123,4,675,1];

const minmax = arr => {
let temp = 0;
 for(let i = 0; i <= arr.length; i++){
    for(let j = 0; j <= arr.length; j++){
     if(arr[i] < arr[j]){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp 
     }
 }
}
    return arr
}

console.log(minmax(array));
