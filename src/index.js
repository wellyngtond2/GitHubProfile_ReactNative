import React from 'react';
import { StatusBar } from 'react-native';

// import './Config/reactotronConfig';

import Routes from './routers';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
};
export default App;
