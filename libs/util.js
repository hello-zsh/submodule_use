import { isEqual } from 'lodash';

export const judgeIsEqual = (newVal, oldVal) => {
  return isEqual(newVal, oldVal);
}

export const formatNumber = number => {
  return number.toLocaleString()
}

export const verifyNumber = string => {
  const regx = /[0-9]/
  return regx.test(string);
}
