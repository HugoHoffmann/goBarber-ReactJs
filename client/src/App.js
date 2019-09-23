import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import Routes from './routes';
import history from './services/history';
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';
import { store, persistor } from './store';
import store from './store';
function App() {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor} >
        <Router history={history}>
          <Routes/> 
          <GlobalStyle/>
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
