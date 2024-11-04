import React from 'react';

import classes from './App.module.scss';

console.log(classes);

const App = () => (
  <div className={classes.app}>
    <h1 className={classes.app__header}>Hello, aviasales. Let start!!</h1>
    <div className={classes.app__text}>Here is going to be your application</div>
  </div>
);

export default App;
