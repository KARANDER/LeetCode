/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let len = []
    for(let i in arr){
        if(fn(arr[i],Number(i))){
            len.push(arr[i])
        }
    }
    return len
};