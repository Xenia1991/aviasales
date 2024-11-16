import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Radio } from 'antd';

import { ticketSlice } from '../../redux/reducers/tickets-reducer';

import classes from './sort.module.scss';

const Sort = () => {
  const sortCheapest = useSelector((state) => state.tickets.sortCheapest);
  const sortFastest = useSelector((state) => state.tickets.sortFastest);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.tickets.isLoading);

  const onChange = ({ target: { value } }) => {
    if (value === 'САМЫЙ ДЕШЁВЫЙ') {
      dispatch(ticketSlice.actions.sortCheapest());
    }
    if (value === 'САМЫЙ БЫСТРЫЙ') {
      dispatch(ticketSlice.actions.sortFastest());
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

export default Sort;
