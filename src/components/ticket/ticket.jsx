import React from 'react';
import { nanoid } from 'nanoid';

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
        date: '10:45 - 08:00',
        stops: ['HKG', 'JNB'],
        duration: 1275,
      },
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '11:20 - 00:50',
        stops: ['HKG'],
        duration: 810,
      },
    ],
  };
  const setTime = (mins) => {
    let duration;
    if (mins < 60) {
      duration = `${mins}м`;
    } else if (mins % 60 === 0) {
      duration = `${mins / 60}ч`;
    } else if (mins % 60 !== 0) {
      const hours = Math.floor(mins / 60);
      duration = `${hours}ч ${mins - hours * 60}м`;
    }
    return duration;
  };
  const setStops = (num) => {
    let stop;
    if (num === 0) {
      stop = 'БЕЗ ПЕРЕСАДОК';
    } else if (num === 1) {
      stop = `${num} ПЕРЕСАДКА`;
    } else if (num > 1 && num < 5) {
      stop = `${num} ПЕРЕСАДКИ`;
    } else if (num >= 5) {
      stop = `${num} ПЕРЕСАДОК`;
    }
    return stop;
  };
  const { segments } = ticketContent;
  const ticketInfo = segments.map((info) => {
    const duration = setTime(info.duration);
    const stopsHeader = setStops(info.stops.length);
    const stops = info.stops.join(', ');
    return (
      <div className={classes['ticket__second-part']} key={nanoid()}>
        <div className={classes['ticket__second-part--inner']}>
          <p className={classes['ticket__second-part--info-top']}>
            {info.origin}-{info.destination}
          </p>
          <p className={classes['ticket__second-part--info-bottom']}>{info.date}</p>
        </div>
        <div className={classes['ticket__second-part--inner']}>
          <p className={classes['ticket__second-part--info-top']}>В ПУТИ</p>
          <p className={classes['ticket__second-part--info-bottom']}>{duration}</p>
        </div>
        <div className={classes['ticket__second-part--inner']}>
          <p className={classes['ticket__second-part--info-top']}>{stopsHeader}</p>
          <p className={classes['ticket__second-part--info-bottom']}>{stops}</p>
        </div>
      </div>
    );
  });
  return (
    <div className={classes.ticket}>
      <div className={classes['ticket__first-part']}>
        <span className={classes['ticket__ticket-price']}>{`${ticketContent.price} P`}</span>
        <img src={avialogo} alt="aviacompany logo" />
      </div>
      <div>{ticketInfo}</div>
    </div>
  );
};

export default Ticket;
