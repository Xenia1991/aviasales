import React from 'react';

import Logo from '../logo/logo';
import Sort from '../sort/sort';
import Filter from '../filter/filter';
import TicketList from '../ticket-list/ticket-list';
import ShowMoreButton from '../show-more-button/show-more-button';

import classes from './App.module.scss';

const App = () => {
  return (
    <div className={classes.app}>
      <Logo />
      <div className={classes.app__main}>
        <div className={classes.app__sort}>
          <Sort />
        </div>
        <div className={classes.app__list}>
          <Filter />
          <TicketList />
          <ShowMoreButton />
        </div>
      </div>
    </div>
  );
};

export default App;
