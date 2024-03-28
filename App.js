// App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import Cart from './src/component/cart';

const App = () => {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
};

export default App;
