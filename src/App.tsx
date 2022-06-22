import React from 'react';
import { Layout, Navbar, Main, SearchPage } from 'src/components';
import './styles/base.css';
import './styles/variables.css';


const App = () => {
  return (
    <Layout name="dimitri">
      <Navbar />
      <Main>
        <SearchPage />
      </Main>
    </Layout>
  );
};

export {App};
