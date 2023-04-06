import React from 'react';
import { CARDS } from '../assets/cards';
import Cards from '../components/FormCards/FormCards';
import SearchBar from '../components/SearchBar/SearchBar';

export default class Main extends React.Component {
  render() {
    return (
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        data-testid="home-page"
      >
        <SearchBar />
        {/* <Cards data={CARDS} /> */}
      </div>
    );
  }
}
