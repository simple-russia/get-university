import React from 'react';
import styles from './main.module.css';

interface MainProps {
    children: JSX.Element[] | JSX.Element,
}

const Main = ({children}: MainProps): JSX.Element => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  );
};

export { Main };
