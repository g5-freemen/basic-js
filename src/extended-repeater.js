const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
	
  additionStr = (options.addition !== undefined) ? String(options.addition) : '' ;
  additionRepeatTimes = options.additionRepeatTimes || 1 ;
  separator = options.separator || '+';
  additionSeparator = options.additionSeparator || '';
  repeatTimes = options.repeatTimes || 1;

  additionArr=new Array(additionRepeatTimes).fill(additionStr);

  additionStr = additionArr.join(additionSeparator);

  return new Array(repeatTimes).fill(str + additionStr).join(separator);
};