import React from 'react';

import classes from './ticket.module.scss';
import avialogo from './S7 Logo.png';

const Ticket = () => {
  const ticketContent = {
    price: 13400,
    carrier: 's7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: 'date',
        stops: ['HKG', 'JNB'],
        duration: 1275,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: 'date',
        stops: ['HKG'],
        duration: 810,
      },
    ],
  };
  const { segments } = ticketContent;
  return (
    <div className={classes.ticket}>
      <div className={classes['ticket__first-part']}>
        <span className={classes['ticket__ticket-price']}>{`${ticketContent.price} P`}</span>
        <img src={avialogo} alt="aviacompany logo" />
      </div>
      <div className={classes['ticket__second-part']}>fff</div>
      <div className={classes['ticket__third-part']}> fdgh </div>
    </div>
  );
};

export default Ticket;
