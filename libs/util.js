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

export const verifyCapitalLetter = string => {
  const regx = /[A-Z]/
  return regx.test(string);
}

export const verifySmallLetter = string => {
  const regx = /[a-z]/
  return regx.test(string)
}

export const verifyLetter = string => {
  const regx = /[a-zA-Z]/
  return regx.test(string)
}
