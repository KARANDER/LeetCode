/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let len = []
    for(let i in arr){
        len.push(fn(arr[i],Number(i)));
    } 

    return len;

};