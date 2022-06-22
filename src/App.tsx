import React from 'react';
import {Layout} from './components/Layout';
import Texts from 'lang/en/global.json';
import './styles/base.css';
import './styles/variables.css';

const Tim = 4;
console.log(Tim);


const App = () => {
  return (
    <Layout>
      <p>{Texts.home.main_paragraph}</p>
    </Layout>
  );
};

export {App};
