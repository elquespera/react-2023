import { Character, PropertyData } from '../types';

export const MOCK_PROPERTIES: PropertyData[] = [
  {
    id: 1,
    price: 250000,
    title: 'Stylish 3-bedroom townhouse with a rooftop deck',
    address: '1234 Smith St, San Francisco, CA 94129',
    availableFrom: new Date('2023-01-02').getTime(),
    rooms: '3',
    purpose: 'sale',
  },
  {
    id: 2,
    price: 150000,
    title: 'Cozy 2-bedroom apartment in the heart of downtown',
    address: '5678 Market St, San Francisco, CA 94102',
    availableFrom: new Date('2023-01-05').getTime(),
    rooms: '2',
    purpose: 'rent',
  },
];

export const MOCK_CHARACTERS: Character[] = [
  {
    id: 1,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: null,
    gender: 'Male',
    origin: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
    ],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: '2017-11-04T18:50:21.651Z',
  },
  {
    id: 2,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    type: null,
    gender: 'Female',
    origin: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
    ],
    url: 'https://rickandmortyapi.com/api/character/3',
    created: '2017-11-04T19:09:56.428Z',
  },
  {
    id: 3,
    name: 'Rick Sanchez',
    status: 'Dead',
    species: 'Human',
    type: null,
    gender: 'Male',
    origin: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  },
];
