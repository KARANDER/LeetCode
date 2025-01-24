/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    // if (this.length > 0) return this.length
    return this.length === 0 ? -1 : this[this.length-1]

    // if (this[0]===null) return null
    // else return -1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */