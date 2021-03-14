const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if ( !members || !members.length || !Array.isArray(members) ) return false;
  let result = [];
  for (let item of members) {
    if (typeof item === 'string') {
      item = item.trim();
      if (item.charAt(0).match(/[a-z]/i)) result.push(item.charAt(0).toUpperCase());
    } 
  }
  return result.sort().join('');
};
