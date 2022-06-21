import React from 'react';
import D from '../lang/en/global.json';
import './styles/base.css';
import './styles/variables.css';
import {NiceComponent} from './components';

const Tim = 4;
console.log(Tim);


const App = () => {
  console.log(process.env.PORT);
  return <>
    <p>{D.home.main_paragraph}</p>
    <NiceComponent />
  </>;
};

export {App};
