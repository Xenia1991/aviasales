import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Ticket from '../ticket/ticket';
import { fetchTickets } from '../../redux/reducers/tickets-reducer';

import classes from './ticket-list.module.scss';

const TicketList = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  return (
    <div>
      <Ticket />
    </div>
  );
};

export default TicketList;
