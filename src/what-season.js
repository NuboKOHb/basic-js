module.exports = function getSeason(date) {
  
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!Date.prototype.isPrototypeOf(date)) {
    throw new Error('lie');
  }
  if (!(date.toString()).includes(date.getFullYear())) {
    throw new Error('lie');
  }

  let month = date.getMonth();
  
  if (month >=0 && month <= 11) {
    let season =["winter", "spring", "summer", "autumn"];
    return season[Math.floor([11,0,1,2,3,4,5,6,7,8,9,10].indexOf(month)/3)];
  } else {
     throw new Error;
  }
};