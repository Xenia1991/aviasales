import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import Ticket from '../ticket/ticket';
import { fetchTicketsThunk, fetchSearchId } from '../../redux/reducers/tickets-reducer';
import { shownTicketSlice } from '../../redux/reducers/shown-ticket-reducer';

import classes from './ticket-list.module.scss';

const TicketList = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);
  const stop = useSelector((state) => state.tickets.stop);
  const { searchId } = useSelector((state) => state.searchId);
  const shownTickets = useSelector((state) => state.shownTickets.shownTickets);
  useEffect(() => {
    dispatch(fetchSearchId());
  }, []);
  useEffect(() => {
    if (searchId && !stop) {
      dispatch(fetchTicketsThunk(searchId));
    }
  }, [searchId, tickets, dispatch, stop]);
  useEffect(() => {
    if (stop) {
      dispatch(shownTicketSlice.actions.sliceTickets(tickets));
    }
  }, [stop, dispatch]);
  let ticketList = [];
  if (shownTickets.length > 0) {
    ticketList = shownTickets.map((ticket) => {
      return <Ticket ticket={ticket} key={nanoid()} />;
    });
  }
  return <div>{ticketList}</div>;
};

export default TicketList;
