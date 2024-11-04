import React from 'react';
import { Radio } from 'antd';

import classes from './filter.module.scss';

const Filter = () => {
  const radioOptions = [
    {
      label: 'САМЫЙ ДЕШЁВЫЙ',
      value: 'САМЫЙ ДЕШЁВЫЙ',
    },
    {
      label: 'САМЫЙ БЫСТРЫЙ',
      value: 'САМЫЙ БЫСТРЫЙ',
    },
    {
      label: 'ОПТИМАЛЬНЫЙ',
      value: 'ОПТИМАЛЬНЫЙ',
    },
  ];
  return (
    <div className={classes.app__filter}>
      <Radio.Group
        block
        size="large"
        options={radioOptions}
        optionType="button"
        buttonStyle="solid"
        defaultValue="САМЫЙ ДЕШЁВЫЙ"
      />
    </div>
  );
};

export default Filter;
