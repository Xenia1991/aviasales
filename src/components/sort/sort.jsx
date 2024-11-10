import React from 'react';
import { Checkbox } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { checkAll, checkWithout, checkOne, checkTwo, checkThree } from '../../redux/actions/sort';

import classes from './sort.module.scss';

const Sort = () => {
  const sortAll = useSelector((state) => state.sort.filterAll);
  const sortWithout = useSelector((state) => state.sort.filterWithout);
  const sortOne = useSelector((state) => state.sort.filterOne);
  const sortTwo = useSelector((state) => state.sort.filterTwo);
  const sortThree = useSelector((state) => state.sort.filterThree);
  const dispatch = useDispatch();
  const handleFilterAll = () => {
    dispatch(checkAll());
  };
  const handleFilterWithout = () => {
    dispatch(checkWithout());
  };
  const handleFilterOne = () => {
    dispatch(checkOne());
  };
  const handleFilterTwo = () => {
    dispatch(checkTwo());
  };
  const handleFilterThree = () => {
    dispatch(checkThree());
  };
  return (
    <div className={classes['app__sorting-elements']}>
      <h5 className={classes['app__sorting-header']}>количество пересадок</h5>
      <div className={classes['app__sorting-checkbox']}>
        <Checkbox onChange={handleFilterAll} checked={sortAll || (sortWithout && sortOne && sortTwo && sortThree)}>
          Все
        </Checkbox>
        <Checkbox onChange={handleFilterWithout} checked={sortWithout}>
          Без пересадок
        </Checkbox>
        <Checkbox onChange={handleFilterOne} checked={sortOne}>
          1 пересадка
        </Checkbox>
        <Checkbox onChange={handleFilterTwo} checked={sortTwo}>
          2 пересадки
        </Checkbox>
        <Checkbox onChange={handleFilterThree} checked={sortThree}>
          3 пересадки
        </Checkbox>
      </div>
    </div>
  );
};

export default Sort;
