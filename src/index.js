import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { loadState, saveState } from './helpers/localStoreage';
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'

// const persistedState = loadState;
// const store = createStore(persistedState);
//
// store.subscribe(() => {
//   saveState({money: 123})
// })

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
