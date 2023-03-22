import React from 'react';
import styles from './PropertyForm.module.scss';

interface PropertyFormProps {
  onSubmit?: () => void;
}

interface ValidationErrors {
  title?: boolean;
  address?: boolean;
  price?: boolean;
  rooms?: boolean;
  availableFrom?: boolean;
  sellOrRent?: boolean;
  agreeToTerms?: boolean;
}

interface PropertyFormState {
  errors: ValidationErrors;
}

export default class PropertyForm extends React.Component<PropertyFormProps, PropertyFormState> {
  constructor(props: PropertyFormProps) {
    super(props);
    this.state = { errors: {} };
  }

  setErrors(newErrors: ValidationErrors) {
    this.setState((current) => {
      return { errors: { ...newErrors, ...current.errors } };
    });
  }

  render() {
    const errors = this.state?.errors;
    return (
      <form className={styles.form}>
        <h3>Add new property</h3>
        <div className={styles.table}>
          <label htmlFor="property-title">Title</label>
          <div className={styles.inputWrapper}>
            <input type="text" id="property-title" />
            {errors?.title && <span className={styles.error}>Please provide property title</span>}
          </div>

          <label htmlFor="property-address">Address</label>
          <div className={styles.inputWrapper}>
            <input type="text" id="property-address" />
            {errors?.address && (
              <span className={styles.error}>Please provide property address</span>
            )}
          </div>

          <label htmlFor="property-price">Price</label>
          <div className={styles.inputWrapper}>
            <input type="number" id="property-price" />
            {errors?.price && <span className={styles.error}>Please provide property price</span>}
          </div>

          <label htmlFor="property-rooms">Rooms</label>
          <div className={styles.inputWrapper}>
            <select id="property-rooms">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>
            {errors?.rooms && (
              <span className={styles.error}>Please select the number of rooms</span>
            )}
          </div>

          <label htmlFor="property-available-from">Available from</label>
          <div className={styles.inputWrapper}>
            <input type="date" id="property-available-from" />
            {errors?.availableFrom && (
              <span className={styles.error}>Please provide property availability</span>
            )}
          </div>

          <label>Purpose</label>
          <div className={styles.inputWrapper}>
            <div className={styles.radioWrapper}>
              <label className={styles.radioLabel}>
                <input type="radio" name="sell-or-rent" value="sell" />
                Sell
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" name="sell-or-rent" value="rent" />
                Rent
              </label>
            </div>
            {errors?.sellOrRent && (
              <span className={styles.error}>Please select the purpose of listing </span>
            )}
          </div>
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.radioLabel}>
            <input type="checkbox" />I agree to the Terms & Conditions
          </label>
          {errors?.agreeToTerms && (
            <span className={styles.error}>
              You have to agree to T&C before adding the property
            </span>
          )}
        </div>
        <input type="submit" value="Add property" />
      </form>
    );
  }
}
