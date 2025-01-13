/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
//    let i;
//    if(args.length=== 0){
//    return 0;
//    }
//     else {
//      for( i in args ){
//          i++;
//    } 
//      return i;
//     }
   
   return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */