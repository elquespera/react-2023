import { PropertyData } from '../types';

export const MOCK_CARDS: PropertyData[] = [
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
