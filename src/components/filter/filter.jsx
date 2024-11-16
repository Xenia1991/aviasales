import React from 'react';
import { Checkbox } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { ticketSlice } from '../../redux/reducers/tickets-reducer';

import classes from './filter.module.scss';

const Filter = () => {
  const filterAll = useSelector((state) => state.tickets.filterAll);
  const filterWithout = useSelector((state) => state.tickets.filterWithout);
  const filterOne = useSelector((state) => state.tickets.filterOne);
  const filterTwo = useSelector((state) => state.tickets.filterTwo);
  const filterThree = useSelector((state) => state.tickets.filterThree);
  const dispatch = useDispatch();
  const handleFilterAll = () => {
    dispatch(ticketSlice.actions.filterAll());
  };
  const handleFilterWithout = () => {
    dispatch(ticketSlice.actions.filterWithout());
  };
  const handleFilterOne = () => {
    dispatch(ticketSlice.actions.filterOne());
  };
  const handleFilterTwo = () => {
    dispatch(ticketSlice.actions.filterTwo());
  };
  const handleFilterThree = () => {
    dispatch(ticketSlice.actions.filterThree());
  };
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

export default Filter;
