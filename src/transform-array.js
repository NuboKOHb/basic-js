module.exports = function transform(arr) {
    if (!arr || [].__proto__ !== arr.__proto__) {
        throw new Error();
    }
    function rr(arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '--discard-next') { 
            i++;
            continue;
            }
            if (arr[i] == '--discard-prev') { 
                result.pop();
                continue;
            }
            if (arr[i] == '--double-next') { 
                result.push(arr[i+1]);
                continue;
            }
            if (arr[i] == '--double-prev') { 
                result.push(arr[i-1]);
                continue;
            }
            if(arr[i] !== undefined) {
                result.push(arr[i]);
            }
        }
        return result;
    }
    do 
    {
        arr = rr(arr);
    }
    while (arr.includes('--discard-next')||
    arr.includes("--discard-prev")||
    arr.includes('--double-next')||
    arr.includes('--double-prev') || arr.includes(undefined))
    //*/
    return arr;
};

//console.log(transform([1, 2, 3, '--double-next', 4, 5]));
//console.log(transform([1, 2, 3, '--discard-prev', 4, 5]));
//console.log(transform(["--discard-next","DEF","--discard-next"]));