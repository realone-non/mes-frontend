import { enableES5, produce } from 'immer';

const produce = (...args) => {
  enableES5();
  return produce(...args);
};

export default { produce };