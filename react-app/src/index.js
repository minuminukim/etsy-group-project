import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/Modal';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
