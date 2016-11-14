import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';

/* Configure firebase when page first loads */
var config = {
    apiKey: "AIzaSyCYUQ4Tx56kIvmzisNYGj6kenhdg6VbeH0",
    authDomain: "chirper-lbaker7.firebaseapp.com",
    databaseURL: "https://chirper-lbaker7.firebaseio.com",
    storageBucket: "chirper-lbaker7.appspot.com",
    messagingSenderId: "771861481484"
};
firebase.initializeApp(config);

//load CSS
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//extraneous method call to produce error for non-configured app
firebase.auth(); 