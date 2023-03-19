import React from 'react';
import { CARDS } from '../assets/cards';
import Cards from '../components/Cards/Cards';
import SearchBar from '../components/SearchBar/SearchBar';

export default class Main extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <SearchBar />
        <Cards data={CARDS} />
      </div>
    );
  }
}
