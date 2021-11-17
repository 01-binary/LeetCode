/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const solution = (a,b) => {
    const andShiftResult = (a & b) << 1;
    const xorResult = a ^ b;
    if(andShiftResult === 0) return xorResult;
    
    return solution(andShiftResult, xorResult);
}
var getSum = function(a, b) {
    return solution(a, b);
};