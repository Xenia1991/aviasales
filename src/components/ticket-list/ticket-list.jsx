import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import Ticket from '../ticket/ticket';
import { fetchTicketsThunk, fetchSearchId, ticketSlice } from '../../redux/reducers/tickets-reducer';

import classes from './ticket-list.module.scss';

const TicketList = () => {
  const [isSliced, setIsSliced] = useState(false);
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);
  const stop = useSelector((state) => state.tickets.stop);
  const isLoading = useSelector((state) => state.tickets.isLoading);
  const { searchId } = useSelector((state) => state.searchId);
  const shownTickets = useSelector((state) => state.tickets.shownTickets);
  useEffect(() => {
    dispatch(fetchSearchId());
  }, []);
  useEffect(() => {
    if (searchId && !stop) {
      dispatch(fetchTicketsThunk(searchId));
    }
  }, [searchId, tickets, dispatch, stop]);
  useEffect(() => {
    if (tickets.length > 0 && !isSliced) {
      dispatch(ticketSlice.actions.sliceTickets());
      setIsSliced(true);
    }
  }, [tickets]);
  let ticketList = [];
  if (shownTickets.length > 0) {
    ticketList = shownTickets.map((ticket) => {
      return <Ticket ticket={ticket} key={nanoid()} />;
    });
  }
  return <div>{ticketList}</div>;
};

export default TicketList;
