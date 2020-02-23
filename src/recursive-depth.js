
module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!Array.isArray(arr)) {
            return 0;
        } else {
            if(arr.length === 0) {
                return 1;
            } else {
                for (let i = 0; i < arr.length; i++) {
                    if (Array.isArray(arr[i])) {arr[i] = calculateDepth(arr[i]);}
                    else {arr[i] = 0;}
                }
                arr.sort((a,b)=>(b-a));
                return 1 + arr[0]; 
            }
        }
    }
};
