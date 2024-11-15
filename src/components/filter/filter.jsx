import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Radio } from 'antd';

import { chooseCheapest, chooseFastest } from '../../redux/actions/filter';

import classes from './filter.module.scss';

const Filter = () => {
  const filterCheapest = useSelector((state) => state.filter.filterCheapest);
  const filterFastest = useSelector((state) => state.filter.filterFastest);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.tickets.isLoading);

  const onChange = ({ target: { value } }) => {
    if (value === 'САМЫЙ ДЕШЁВЫЙ') {
      dispatch(chooseCheapest());
    }
    if (value === 'САМЫЙ БЫСТРЫЙ') {
      dispatch(chooseFastest());
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
  ];
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
      {isLoading ? (
        <div>
          <span className={classes.loader} />
          <p className={classes.info}>Search tickets...</p>
        </div>
      ) : null}
    </div>
  );
};

export default Filter;
