const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error () 

  let newArr=[...arr];
  
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === '--double-prev') newArr.splice(i,1,newArr[i-1]);
    else if (arr[i] === '--double-next') newArr.splice(i,1,arr[i+1]);
    else if (arr[i] === '--discard-next') newArr.splice(i+1,1,undefined);
    else if (arr[i] === '--discard-prev' && i>0) newArr.splice(i-1,1,undefined)
  }

  return newArr.filter(el => el!==undefined && el!=='--discard-prev' && el!=='--discard-next');
};
