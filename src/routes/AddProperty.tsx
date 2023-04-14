import { useState } from 'react';
import FormCards from '../components/FormCards/FormCards';
import PropertyForm from '../components/PropertyForm/PropertyForm';
import { PropertyData } from '../types';

export default function AddProperty() {
  const [cardData, setCardData] = useState<PropertyData[]>([]);

  const handleSubmit = (data: PropertyData) => {
    setCardData((current) => [...current, data]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <PropertyForm onSubmit={handleSubmit} />
      <FormCards data={cardData} />
    </div>
  );
}
