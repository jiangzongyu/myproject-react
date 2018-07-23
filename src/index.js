// import './css/common.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Header from './components/header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
