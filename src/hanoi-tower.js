module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
    let solution = {};
    turnsSpeed/=3600;
    solution.turns = 2**disksNumber -1; 
    solution.seconds = solution.turns / turnsSpeed;
    return solution;
    //throw 'Not implemented';
    // remove line with error and write your code here
}
//console.log(calculateHanoi(4, 2), {turns: 4.230758200257591e+124, seconds: 7.899820714779368e+120});
//console.log(calculateHanoi(414, 19279842), {turns: 4.230758200257591e+124, seconds: 7.899820714779368e+120});