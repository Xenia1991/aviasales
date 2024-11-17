import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import Ticket from '../ticket/ticket';
import { fetchTicketsThunk, fetchSearchId, ticketSlice } from '../../redux/reducers/tickets-reducer';

import classes from './ticket-list.module.scss';

const TicketList = () => {
  let ticketList = [];
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);
  const stop = useSelector((state) => state.tickets.stop);
  const { searchId } = useSelector((state) => state.searchId);
  const shownTickets = useSelector((state) => state.tickets.shownTickets);

  useEffect(() => {
    dispatch(fetchSearchId());
  }, []);

  useEffect(() => {
    if (searchId && !stop) {
      dispatch(fetchTicketsThunk(searchId));
      dispatch(ticketSlice.actions.sliceTickets(5));
      dispatch(ticketSlice.actions.sortTickets());
    }
  }, [searchId, tickets, dispatch, stop]);

  if (shownTickets.length > 0) {
    ticketList = shownTickets.map((ticket) => {
      return <Ticket ticket={ticket} key={nanoid()} />;
    });
  }

  return <div>{ticketList}</div>;
};

export default TicketList;
