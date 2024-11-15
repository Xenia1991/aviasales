import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';

import { ticketSlice } from '../../redux/reducers/tickets-reducer';

import classes from './show-more-button.module.scss';

const ShowMoreButton = () => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(ticketSlice.actions.sliceTickets());
  };
  return (
    <div>
      <Button type="primary" className={classes.app__button} size="large" onClick={handleButtonClick}>
        показать ещё 5 билетов!
      </Button>
    </div>
  );
};

export default ShowMoreButton;
