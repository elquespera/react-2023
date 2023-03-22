import React from 'react';
import Cards from '../components/Cards/Cards';
import PropertyForm from '../components/PropertyForm/PropertyForm';
import { EmptyProps, PropertyData } from '../types';

interface AddPropertyState {
  cardData: PropertyData[];
}

export default class AddProperty extends React.Component<EmptyProps, AddPropertyState> {
  constructor(props: EmptyProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { cardData: [] };
  }

  handleSubmit(data: PropertyData) {
    this.setState((current) => {
      return { cardData: [...current.cardData, data] };
    });
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <PropertyForm onSubmit={this.handleSubmit} />
        <Cards data={this.state.cardData} />
      </div>
    );
  }
}
