module.exports = function createDreamTeam(arr) {
  let res = "";
  if (arr == null) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == 'string') {
      arr[i] = arr[i].trim().toUpperCase();
      if(/^[a-zA-Z]$/.test(arr[i].slice(0,1))){
        res += arr[i].slice(0,1);
      }
    }
  }
  if (res == "") {
    return false;
  } else {
    return res.split('').sort().join('');
  }
};

