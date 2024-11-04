import React from 'react';
import { Button } from 'antd';

import classes from './show-more-button.module.scss';

const ShowMoreButton = () => {
  return (
    <div>
      <Button type="primary" className={classes.app__button} size="large">
        показать ещё 5 билетов!
      </Button>
    </div>
  );
};

export default ShowMoreButton;
