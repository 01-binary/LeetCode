/**
 * @param {number} n
 * @return {number}
 */
const solution = (n) => {
    answerArr = [1,2,3];
    for(let i = 3; i< n; i++) {
        answerArr.push(answerArr[i-1]+answerArr[i-2]);
    }
    return answerArr[n-1];
}
var climbStairs = function(n) {
    return solution(n);
};