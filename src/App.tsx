import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './routes/routes';

const router = createBrowserRouter(ROUTES);

export default class App extends React.Component {
  render() {
    return (
      <main>
        <RouterProvider router={router} />
      </main>
    );
  }
}
