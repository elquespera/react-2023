import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';
import Layout from './routes/Layout';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {ROUTES.map(({ to, title, testId, page: Page }) => (
              <Route
                key={to}
                path={to}
                element={<Layout title={title} page={<Page />} testId={testId} />}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
