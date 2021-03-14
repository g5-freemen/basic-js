const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (!matrix.length) return 0;

  let countCats = 0;
  for (let item of matrix) 
    for (let i=0; i<item.length; i++) 
      if (item[i]==='^^') countCats++;    

  return countCats;
};