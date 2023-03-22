import React from 'react';
import styles from './PropertyForm.module.scss';

interface PropertyFormProps {
  onSubmit?: () => void;
}

export default class PropertyForm extends React.Component<PropertyFormProps> {
  constructor(props: PropertyFormProps) {
    super(props);
  }
  render() {
    return (
      <form className={styles.form}>
        <h3>Add new property</h3>
        <div className={styles.table}>
          <label htmlFor="property-title">Title</label>
          <input type="text" id="property-title" />

          <label htmlFor="property-address">Address</label>
          <input type="text" id="property-address" />

          <label htmlFor="property-price">Address</label>
          <input type="text" id="property-price" />

          <label htmlFor="property-rooms">Rooms</label>
          <select id="property-rooms">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
          </select>

          <label htmlFor="property-available-from">Available from</label>
          <input type="date" id="property-available-from" />

          <label>Sell or rent</label>
          <div>
            <label className={styles.radioLabel}>
              <input type="radio" name="sell-or-rent" value="sell" />
              Sell
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" name="sell-or-rent" value="rent" />
              Rent
            </label>
          </div>
        </div>
        <label className={styles.radioLabel}>
          <input type="checkbox" />I want to receive email notifications about this property
        </label>
        <input type="submit" value="Add property" />
      </form>
    );
  }
}
