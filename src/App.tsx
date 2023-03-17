import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './routes/AboutUs';
import Layout from './routes/Layout';
import Main from './routes/Main';
import Route404 from './routes/Route404';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="*" element={<Route404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
