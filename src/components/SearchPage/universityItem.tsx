import React from 'react';
import styles from './universityitem.module.css';

interface UniversityItemProps {
    name: string,
    web_pages: string[]
}

const UniversityItem = (props: UniversityItemProps): JSX.Element => {
  return (
    <div className={styles.main}>
      <span>{props.name}</span>
      <a href={props.web_pages[0]}>Visit site</a>
    </div>
  );
};

export { UniversityItem };
