import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EssayForm from './EssayForm';
import Flaworfrom from './Flaworform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <EssayForm />
    <Flaworfrom />
  </React.StrictMode>
);