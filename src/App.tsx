import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';
import Layout from './routes/Layout';
import { store } from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Routes>
        {ROUTES.map(({ to, title, page: Page }) => (
          <Route key={to} path={to} element={<Layout title={title} page={<Page />} />} />
        ))}
      </Routes>
    </Provider>
  );
}
