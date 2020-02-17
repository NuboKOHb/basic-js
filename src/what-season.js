module.exports = function getSeason(date) {
  
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  let month = (date.getMonth())?date.getMonth():-1;
  
  if (month && month >=0 && month <= 11) {
    let season =["winter", "spring", "summer", "autumn"];
    return season[Math.floor([11,0,1,2,3,4,5,6,7,8,9,10].indexOf(month)/3)];
  } else {
     throw new Error;
  }
  // remove line with error and write your code here
};

//console.log(getSeason(new Date(2361, 2, 24, 22, 13, 47, 69)), 'spring');
