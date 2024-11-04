import React from 'react';
import { Checkbox } from 'antd';

import classes from './sort.module.scss';

const Sort = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  console.log(classes);
  return (
    <div className={classes['app__sorting-elements']}>
      <h5 className={classes['app__sorting-header']}>количество пересадок</h5>
      <div className={classes['app__sorting-checkbox']}>
        <Checkbox onChange={onChange}>Все</Checkbox>
        <Checkbox onChange={onChange}>Без пересадок</Checkbox>
        <Checkbox onChange={onChange}>1 пересадка</Checkbox>
        <Checkbox onChange={onChange}>2 пересадки</Checkbox>
        <Checkbox onChange={onChange}>3 пересадки</Checkbox>
      </div>
    </div>
  );
};

export default Sort;
