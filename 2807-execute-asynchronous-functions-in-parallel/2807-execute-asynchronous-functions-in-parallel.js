
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let resolvedCount = 0;

        functions.forEach((fn, index) => {
            try {
                fn()
                    .then(value => {
                        results[index] = value;
                        resolvedCount++;
                        if (resolvedCount === functions.length) {
                            resolve(results);
                        }
                    })
                    .catch(err => reject(err));
            } catch (err) {
                reject(err);
            }
        });
    });
};

/**
 * Example Usage:
 * const promise = promiseAll([
 *     () => new Promise(res => setTimeout(() => res(42), 100)),
 *     () => new Promise(res => setTimeout(() => res(24), 200)),
 * ]);
 * promise.then(console.log); // [42, 24]
 */
