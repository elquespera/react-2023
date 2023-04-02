import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';
import Layout from './routes/Layout';

export default function App() {
  return (
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
  );
}
