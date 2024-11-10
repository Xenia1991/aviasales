const checkAll = () => {
  return {
    type: 'ALL_CHECKED',
  };
};

const checkWithout = () => {
  return {
    type: 'WITHOUT_CHECKED',
  };
};

const checkOne = () => {
  return {
    type: 'ONE_CHECKED',
  };
};

const checkTwo = () => {
  return {
    type: 'TWO_CHECKED',
  };
};

const checkThree = () => {
  return {
    type: 'THREE_CHECKED',
  };
};

export { checkAll, checkWithout, checkOne, checkTwo, checkThree };
