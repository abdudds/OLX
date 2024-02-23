import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './Components/Store/Context';
import firebase from './Firebase/config';
import Context from './Components/Store/Context'

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
    <App />
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
