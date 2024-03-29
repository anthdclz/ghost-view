import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import WebFont from 'webfontloader';

import './index.css';
import App from './App';

WebFont.load({
  google: {
    families: ['Raleway:wght@400;600', 'Kaushan+Script', 'Permanent+Marker', 'Caveat']
  }
});

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);