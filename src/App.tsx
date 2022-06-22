import React from 'react';

import { Layout } from '../src/components/Layout';
import { Navbar } from 'src/components/Navbar';

import Texts from 'lang/en/global.json';
import './styles/base.css';
import './styles/variables.css';

const Tim = 4;
console.log(Tim);


const App = () => {
  return (
    <Layout>
      <Navbar />
      <p>{Texts.home.main_paragraph}</p>
    </Layout>
  );
};

export {App};
