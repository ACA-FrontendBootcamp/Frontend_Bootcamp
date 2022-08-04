const arr2 = [5, 6, 7, [8, 9,[10,11]]];

let newArr = [];
function flat(arr) {
    for(let i = 0; i< arr.length ; i++){
        if (!Array.isArray(arr[i])){
            newArr.push(arr[i])
        } else if (Array.isArray(arr[i])){
            flat(arr[i])
        } else {
            for (let j = 0; j<arr[i].length; j++){
                newArr.push(arr[i][j])
            }
        }
    }
return newArr;
}

const result1= flat(arr2);
console.log(result1);