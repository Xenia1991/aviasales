import React from 'react';
import { nanoid } from 'nanoid';

import classes from './ticket.module.scss';

const Ticket = ({ ticket }) => {
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
  const formatTime = (date, duration) => {
    const startTimeHour = String(new Date(date).getHours());
    const startTimeMins = String(new Date(date).getMinutes());
    const startTimeInMs = new Date(date).getTime();
    const durationInMs = duration * 60 * 1000;
    const endTimeInMs = startTimeInMs + durationInMs;
    const endTimeInHour = String(new Date(endTimeInMs).getHours());
    const endTImeInMins = String(new Date(endTimeInMs).getMinutes());
    let begin = '';
    let end = '';
    if (startTimeHour.length === 1 && startTimeInMs.length === 1) {
      begin = `0${startTimeHour}:0${startTimeMins}`;
    } else if (startTimeHour.length === 1) {
      begin = `0${startTimeHour}:${startTimeMins}`;
    } else if (startTimeInMs.length === 1) {
      begin = `${startTimeHour}:0${startTimeMins}`;
    } else {
      begin = `${startTimeHour}:${startTimeMins}`;
    }
    if (endTimeInHour.length === 1 && endTImeInMins.length === 1) {
      end = `0${endTimeInHour}:0${endTImeInMins}`;
    } else if (endTimeInHour.length === 1) {
      end = `0${endTimeInHour}:${endTImeInMins}`;
    } else if (endTImeInMins.length === 1) {
      end = `${endTimeInHour}:0${endTImeInMins}`;
    } else {
      end = `${endTimeInHour}:${endTImeInMins}`;
    }
    return `${begin} - ${end}`;
  };
  const formatPrice = (price) => {
    let formattedPrice = '';
    const strinfifyPrice = String(price);
    if (strinfifyPrice.length === 4) {
      formattedPrice = `${strinfifyPrice.slice(0, 1)} ${strinfifyPrice.slice(1)}`;
    } else if (strinfifyPrice.length === 5) {
      formattedPrice = `${strinfifyPrice.slice(0, 2)} ${strinfifyPrice.slice(2)}`;
    } else if (strinfifyPrice.length === 6) {
      formattedPrice = `${strinfifyPrice.slice(0, 3)} ${strinfifyPrice.slice(3)}`;
    }
    return formattedPrice;
  };
  const { segments } = ticket;
  const ticketInfo = segments.map((info) => {
    const duration = setTime(info.duration);
    const stopsHeader = setStops(info.stops.length);
    const timeDuration = formatTime(info.date, info.duration);
    const stops = info.stops.join(', ');
    return (
      <div className={classes['ticket__second-part']} key={nanoid()}>
        <div className={classes['ticket__second-part--inner']}>
          <p className={classes['ticket__second-part--info-top']}>
            {info.origin}-{info.destination}
          </p>
          <p className={classes['ticket__second-part--info-bottom']}>{timeDuration}</p>
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
  const finalPrice = formatPrice(ticket.price);
  return (
    <div className={classes.ticket}>
      <div className={classes['ticket__first-part']}>
        <span className={classes['ticket__ticket-price']}>{`${finalPrice} P`}</span>
        <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="aviacompany logo" />
      </div>
      <div>{ticketInfo}</div>
    </div>
  );
};

export default Ticket;
