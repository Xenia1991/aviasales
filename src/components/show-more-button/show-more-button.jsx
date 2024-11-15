import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { shownTicketSlice } from '../../redux/reducers/shown-ticket-reducer';

import classes from './show-more-button.module.scss';

const ShowMoreButton = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);
  const handleButtonClick = () => {
    dispatch(shownTicketSlice.actions.sliceTickets(tickets));
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
