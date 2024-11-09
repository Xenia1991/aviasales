import React from 'react';
import { Checkbox } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { checkAll, checkWithout, checkOne, checkTwo, checkThree } from '../../redux/actions';

import classes from './sort.module.scss';

const Sort = () => {
  const filterAll = useSelector((state) => state.filterAll);
  const filterWithout = useSelector((state) => state.filterWithout);
  const filterOne = useSelector((state) => state.filterOne);
  const filterTwo = useSelector((state) => state.filterTwo);
  const filterThree = useSelector((state) => state.filterThree);
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
  console.log(filterAll, filterWithout, filterOne, filterTwo, filterThree);
  return (
    <div className={classes['app__sorting-elements']}>
      <h5 className={classes['app__sorting-header']}>количество пересадок</h5>
      <div className={classes['app__sorting-checkbox']}>
        <Checkbox
          onChange={handleFilterAll}
          checked={filterAll || (filterWithout && filterOne && filterTwo && filterThree)}
        >
          Все
        </Checkbox>
        <Checkbox onChange={handleFilterWithout} checked={filterWithout}>
          Без пересадок
        </Checkbox>
        <Checkbox onChange={handleFilterOne} checked={filterOne}>
          1 пересадка
        </Checkbox>
        <Checkbox onChange={handleFilterTwo} checked={filterTwo}>
          2 пересадки
        </Checkbox>
        <Checkbox onChange={handleFilterThree} checked={filterThree}>
          3 пересадки
        </Checkbox>
      </div>
    </div>
  );
};

export default Sort;
