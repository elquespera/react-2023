import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';
import Layout from './routes/Layout';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {ROUTES.map(({ to, title, page: Page }) => (
            <Route key={to} path={to} element={<Layout title={title} page={<Page />} />} />
          ))}
        </Routes>
      </BrowserRouter>
    );
  }
}
