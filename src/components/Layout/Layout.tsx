import React from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
    children: JSX.Element[] | JSX.Element,
    name: string,
}

const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  );
};

export { Layout };
