import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router} from 'react-router-dom'
import DataProvider from "./context/dataProvider";

import './assets/css/base.css';
import App from './App';

ReactDOM.render(
    <Router>
            <App/>
    </Router>
    ,
    document.getElementById('root'));

