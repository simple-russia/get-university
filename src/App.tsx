import React from 'react';
import D from '../lang/en/global.json';
import './styles.css';
import './cooler_styles.scss';

const Tim = 4;
console.log(Tim);


const App = () => {
  console.log(process.env.PORT);
  return <p>{D.home.main_paragraph}</p>;
};

export {App};
