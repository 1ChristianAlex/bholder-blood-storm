import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import { ReactRoutes } from './routes';
import GlobalStyles from './styles/global';

const App = () => (
  <>
    <Provider store={store}>
      <ReactRoutes />
      <GlobalStyles />
    </Provider>
  </>
);

export default App;
