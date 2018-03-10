import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
// eslint-disable-next-line
import styles from './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
