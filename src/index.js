import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import  manageList from './redux/reducer/manageList';

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
  const store = createStore(manageList, { items: [] , name:'shimon' }, enhancers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Provider store={store}> 
<App />
</Provider>,
  </React.StrictMode>
);

