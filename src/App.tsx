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
          <Route path="/" element={<Layout title="Home" page={<Main />} />} />
          <Route path="/about-us" element={<Layout title="About Us" page={<AboutUs />} />} />
          <Route path="*" element={<Layout title="Not Found" page={<Route404 />} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
