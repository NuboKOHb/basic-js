module.exports = function countCats(matrix) {
  let countCats = 0;
  for (let i=0; i < matrix.length ;i++) {
    countCats+= matrix[i].join("").split("^^").length;
  }
  return countCats;
};
