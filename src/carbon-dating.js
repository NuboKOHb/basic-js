const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != 'string') {
    return false;
  }
  if (isNaN(+sampleActivity)) {
    return false;
  }
  if ((+sampleActivity) <= 0 ) {
    return false;
  } 
  if ((+sampleActivity) > 15) {
    return false;
  } 
   
  let k = (0.693/HALF_LIFE_PERIOD);
  let year = Math.ceil(Math.log(MODERN_ACTIVITY/+sampleActivity)/k);
  if (year < 0 ) {
    return false;
  } 
  return year;
};

//console.log(dateSample('3'), 13308);