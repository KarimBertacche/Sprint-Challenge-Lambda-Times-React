import React from 'react';
import withAuthentication from './components/authentication/authentication';
import LoginPage from './components/Login';
import AppContainer from './AppContainer'

const Authenticated = withAuthentication(AppContainer)(LoginPage);

const App = () => {
  return (
    <Authenticated />
  );
}

export default App;
