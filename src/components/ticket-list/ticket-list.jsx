import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import Ticket from '../ticket/ticket';
import { fetchTickets, fetchSearchId } from '../../redux/reducers/tickets-reducer';

import classes from './ticket-list.module.scss';

const TicketList = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);
  const { searchId } = useSelector((state) => state.searchId);

  useEffect(() => {
    dispatch(fetchSearchId());
  }, []);
  useEffect(() => {
    if (searchId) {
      dispatch(fetchTickets(searchId));
    }
  }, [searchId, dispatch]);
  console.log(tickets);
  let ticketList = [];
  if (tickets?.tickets) {
    ticketList = tickets.tickets.map((ticket) => {
      return <Ticket ticket={ticket} key={nanoid()} />;
    });
  }
  return <div>{ticketList}</div>;
};

export default TicketList;
