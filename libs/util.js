import { isEqual } from 'lodash';

export const judgeIsEqual = (newVal, oldVal) => {
  return isEqual(newVal, oldVal);
}