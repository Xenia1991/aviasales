import React from 'react';

import Ticket from '../ticket/ticket';

import classes from './ticket-list.module.scss';

const TicketList = () => {
  return (
    <div>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
};

export default TicketList;
