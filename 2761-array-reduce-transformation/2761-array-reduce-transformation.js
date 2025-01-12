/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
   let r = init;
   nums.forEach((n) => 
   {
    r = fn(r,n);

   })
   return r
};