import FormCards from '../components/FormCards/FormCards';
import PropertyForm from '../components/PropertyForm/PropertyForm';

export default function AddProperty() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <PropertyForm />
      <FormCards />
    </div>
  );
}
