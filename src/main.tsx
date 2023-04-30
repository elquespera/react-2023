import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles/global.scss';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root') as HTMLElement;

hydrateRoot(
  root,
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
