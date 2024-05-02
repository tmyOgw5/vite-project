import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './Routes';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <React.Fragment>
      <Header />
      {routing}
    </React.Fragment>
  );
};

export default App;
