import React from 'react';
import styles from './navbar.module.css';
import Logo from 'public/assets/images/logo.png';

interface NavbarProps {}

const Navbar = ({}: NavbarProps): JSX.Element => {
  return (
    <nav className={styles.main}>
      <img className={styles.logo} src={Logo} />
    </nav>
  );
};

export {Navbar};
