import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, HashRouter } from 'react-router-dom';

import './styles/materialize.theme.scss';
import Home from './modules/home';
import AuthRouter from './modules/auth/routes';
import { DefaultTheme } from './styles/defaultTheme';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <HashRouter>
        <Route path="/" exact component={Home} />
        <Route path="/auth/*" exact component={AuthRouter} />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
