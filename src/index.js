import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import RenderApp from './App';
import store from './components/Redux/configurestore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RenderApp />
    </Provider>
  </React.StrictMode>,
);
