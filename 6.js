let arrSize = 3;
let arr = [1, 2, 3, "string"];
for (let i = 0; i < arrSize; i++)
arr[i] = Math.round(Math.random() * arrSize)
let allEqual = array => array.every(val => val === array[0])
console.log(allEqual(arr));