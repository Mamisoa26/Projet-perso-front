import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import "bootstrap-css-only/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
