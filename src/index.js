import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import './assets/sass/style.scss';
import './assets/fonts/Inter/Inter-Regular.ttf';
import '../src/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
);
