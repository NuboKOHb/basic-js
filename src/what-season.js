module.exports = function getSeason(date = new Date) {
  let season =["winter", "spring", "summer", "autumn"];
  if (date.getMonth() in [11,0,1]) {
    console.log(season[0]);
    return season[0];
  } else if (date.getMonth in [2,3,4]) {
    return season[1];
  } else if (date.getMonth in [5,6,7]) {
    return season[2];
  } else if (date.getMonth in [8,9,10]) {
    return season[3];
  } else {
    return false;
  }


  //  throw 'Not implemented';
  // remove line with error and write your code here
};
