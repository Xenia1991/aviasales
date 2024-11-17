import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { ticketSlice } from '../../redux/reducers/tickets-reducer';

import classes from './show-more-button.module.scss';

const ShowMoreButton = () => {
  const dispatch = useDispatch();
  const shownTickets = useSelector((state) => state.tickets.shownTickets);

  const handleButtonClick = () => {
    dispatch(ticketSlice.actions.sliceTickets());
  };
  return (
    <div className={classes.button__container}>
      {shownTickets.length > 0 ? (
        <Button type="primary" className={classes.app__button} size="large" onClick={handleButtonClick}>
          показать ещё 5 билетов!
        </Button>
      ) : null}
    </div>
  );
};

export default ShowMoreButton;
