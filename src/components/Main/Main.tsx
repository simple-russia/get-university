import React from 'react';
import styles from './main.module.css';

interface MainProps {}

const Main = ({}: MainProps): JSX.Element => {
  return (
    <div className={styles.main}>
      Main element
    </div>
  );
};

export { Main };
