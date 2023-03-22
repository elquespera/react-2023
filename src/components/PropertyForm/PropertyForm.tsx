import React from 'react';
import { PropertyData } from '../../types';
import styles from './PropertyForm.module.scss';

interface PropertyFormProps {
  onSubmit?: (data: PropertyData) => void;
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
  formRef: React.RefObject<HTMLFormElement>;
  titleRef: React.RefObject<HTMLInputElement>;
  addressRef: React.RefObject<HTMLInputElement>;
  priceRef: React.RefObject<HTMLInputElement>;
  roomsRef: React.RefObject<HTMLSelectElement>;
  availableFromRef: React.RefObject<HTMLInputElement>;
  sellRef: React.RefObject<HTMLInputElement>;
  rentRef: React.RefObject<HTMLInputElement>;
  agreeToTermsRef: React.RefObject<HTMLInputElement>;

  constructor(props: PropertyFormProps) {
    super(props);
    this.state = { errors: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formRef = React.createRef();
    this.titleRef = React.createRef();
    this.addressRef = React.createRef();
    this.priceRef = React.createRef();
    this.roomsRef = React.createRef();
    this.availableFromRef = React.createRef();
    this.sellRef = React.createRef();
    this.rentRef = React.createRef();
    this.agreeToTermsRef = React.createRef();
  }

  validateForm(): boolean {
    const errors: ValidationErrors = {
      title: this.titleRef.current?.value === '',
      address: this.addressRef.current?.value === '',
      price: this.priceRef.current?.value === '',
      rooms: this.roomsRef.current?.value === '',
      availableFrom: this.availableFromRef.current?.value === '',
      sellOrRent: !this.sellRef.current?.checked && !this.rentRef.current?.checked,
      agreeToTerms: !this.agreeToTermsRef.current?.checked,
    };

    this.setState({ errors });
    return Object.values(errors).every((value) => !value);
  }

  handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (this.validateForm()) {
      if (this.props.onSubmit) {
        const data: PropertyData = {
          id: crypto.randomUUID(),
          title: this.titleRef.current?.value || '',
          address: this.addressRef.current?.value || '',
          price: parseInt(this.priceRef.current?.value || '') || 0,
          rooms: this.roomsRef.current?.value || '',
          availableFrom: new Date(this.availableFromRef.current?.value || '').getTime(),
          purpose: this.sellRef.current?.checked ? 'sale' : 'rent',
        };
        this.props.onSubmit(data);
      }
      this.formRef.current?.reset();
    }
  }

  render() {
    const errors = this.state?.errors;
    return (
      <form ref={this.formRef} className={styles.form} onSubmit={this.handleSubmit}>
        <h3>Add new property</h3>
        <div className={styles.table}>
          <label htmlFor="property-title">Title</label>
          <div className={styles.inputWrapper}>
            <input type="text" id="property-title" ref={this.titleRef} />
            {errors?.title && <span className={styles.error}>Please provide property title</span>}
          </div>

          <label htmlFor="property-address">Address</label>
          <div className={styles.inputWrapper}>
            <input type="text" id="property-address" ref={this.addressRef} />
            {errors?.address && (
              <span className={styles.error}>Please provide property address</span>
            )}
          </div>

          <label htmlFor="property-price">Price</label>
          <div className={styles.inputWrapper}>
            <input type="number" id="property-price" ref={this.priceRef} />
            {errors?.price && <span className={styles.error}>Please provide property price</span>}
          </div>

          <label htmlFor="property-rooms">Rooms</label>
          <div className={styles.inputWrapper}>
            <select id="property-rooms" ref={this.roomsRef}>
              <option></option>
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
            <input type="date" id="property-available-from" ref={this.availableFromRef} />
            {errors?.availableFrom && (
              <span className={styles.error}>Please provide property availability</span>
            )}
          </div>

          <label>Purpose</label>
          <div className={styles.inputWrapper}>
            <div className={styles.radioWrapper}>
              <label className={styles.radioLabel}>
                <input type="radio" ref={this.sellRef} name="sell-or-rent" value="sell" />
                Sell
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" ref={this.rentRef} name="sell-or-rent" value="rent" />
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
            <input type="checkbox" ref={this.agreeToTermsRef} />I agree to the Terms & Conditions
          </label>
          {errors?.agreeToTerms && (
            <span className={styles.error}>
              You have to agree to T&C before adding the property
            </span>
          )}
        </div>
        <button className={styles.submit} type="submit">
          Submit property
        </button>
      </form>
    );
  }
}
