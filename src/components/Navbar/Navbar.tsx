import React from 'react';
import styles from './navbar.module.css';

interface NavbarProps {}

const Navbar = ({}: NavbarProps): JSX.Element => {
  return (
    <nav className={styles.main}>
      Navbar
    </nav>
  );
};

export {Navbar};
