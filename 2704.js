/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{toBe(anotherVal){
        if(val === anotherVal) {
            return true
        }
        throw new Error("Not Equal")
    },
    notToBe(thirdVal){
        if (val !== thirdVal){
            return true
        }
        throw new Error("Equal")
    }}
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */