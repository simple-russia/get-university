import React from 'react';

import { Layout, Navbar, Main } from 'src/components';

import Texts from 'lang/en/global.json';
import './styles/base.css';
import './styles/variables.css';


const App = () => {
  return (
    <Layout name="dimitri">
      <Navbar />
      <Main />
      <p>{Texts.home.main_paragraph}</p>
    </Layout>
  );
};

export {App};
