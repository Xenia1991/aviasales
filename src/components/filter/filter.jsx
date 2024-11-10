import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Radio } from 'antd';

import { chooseCheapest, chooseFastest } from '../../redux/actions/filter';

import classes from './filter.module.scss';

const Filter = () => {
  const filterCheapest = useSelector((state) => state.filter.filterCheapest);
  const filterFastest = useSelector((state) => state.filter.filterFastest);
  const dispatch = useDispatch();

  const onChange = ({ target: { value } }) => {
    if (value === 'САМЫЙ ДЕШЁВЫЙ') {
      dispatch(chooseCheapest());
      console.log('work');
    }
    if (value === 'САМЫЙ БЫСТРЫЙ') {
      dispatch(chooseFastest());
      console.log('work2');
    }
  };
  const radioOptions = [
    {
      label: 'САМЫЙ ДЕШЁВЫЙ',
      value: 'САМЫЙ ДЕШЁВЫЙ',
    },
    {
      label: 'САМЫЙ БЫСТРЫЙ',
      value: 'САМЫЙ БЫСТРЫЙ',
    },
    {
      label: 'ОПТИМАЛЬНЫЙ',
      value: 'ОПТИМАЛЬНЫЙ',
      disabled: true,
    },
  ];
  console.log(filterCheapest, filterFastest);
  return (
    <div className={classes.app__filter}>
      <Radio.Group
        block
        size="large"
        options={radioOptions}
        optionType="button"
        buttonStyle="solid"
        defaultValue="САМЫЙ ДЕШЁВЫЙ"
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
