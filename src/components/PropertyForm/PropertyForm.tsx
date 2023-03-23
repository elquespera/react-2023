import React from 'react';
import { PropertyData } from '../../types';
import Input from '../Input/Input';
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
  formRef: React.RefObject<HTMLFormElement> = React.createRef();
  titleRef: React.RefObject<HTMLInputElement> = React.createRef();
  addressRef: React.RefObject<HTMLInputElement> = React.createRef();
  priceRef: React.RefObject<HTMLInputElement> = React.createRef();
  roomsRef: React.RefObject<HTMLSelectElement> = React.createRef();
  availableFromRef: React.RefObject<HTMLInputElement> = React.createRef();
  sellRef: React.RefObject<HTMLInputElement> = React.createRef();
  rentRef: React.RefObject<HTMLInputElement> = React.createRef();
  agreeToTermsRef: React.RefObject<HTMLInputElement> = React.createRef();
  imageRef: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: PropertyFormProps) {
    super(props);
    this.state = { errors: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const file = this.imageRef.current?.files ? this.imageRef.current.files[0] : null;
    const image = file ? URL.createObjectURL(file) : undefined;

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
          image,
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
          <Input
            id="property-title"
            required
            inputRef={this.titleRef}
            label="Title"
            error={errors.title}
            errorMsg="Please provide property title"
          />

          <Input
            id="property-address"
            required
            inputRef={this.addressRef}
            label="Address"
            error={errors.address}
            errorMsg="Please provide property address"
          />

          <Input
            id="property-price"
            required
            type="number"
            inputRef={this.priceRef}
            label="Price"
            error={errors.price}
            errorMsg="Please provide property price"
          />

          <Input
            id="property-rooms"
            type="select"
            required
            selectRef={this.roomsRef}
            label="Rooms"
            options={['', '1', '2', '3', '4', '5+']}
            error={errors.rooms}
            errorMsg="Please select the number of rooms"
          />

          <Input
            id="property-available-from"
            type="date"
            required
            inputRef={this.availableFromRef}
            label="Available from"
            error={errors.availableFrom}
            errorMsg="Please provide property availability"
          />

          <Input type="file" inputRef={this.imageRef} label="Image" />

          <span />

          <div className={styles.inputWrapper}>
            <div className={styles.radioWrapper}>
              <Input
                id="sell-or-rent"
                type="radio"
                inputRef={this.sellRef}
                label="Sell"
                value="sell"
              />
              <Input
                id="sell-or-rent"
                type="radio"
                inputRef={this.rentRef}
                label="Rent"
                value="rent"
              />
            </div>
            {errors?.sellOrRent && (
              <span className={styles.error}>Please select the purpose of listing </span>
            )}
          </div>
        </div>

        <Input
          type="checkbox"
          className={styles.agree}
          inputRef={this.agreeToTermsRef}
          label="I agree to the Terms & Conditions"
          error={errors.agreeToTerms}
          errorMsg="You have to agree to T&C before adding the property"
        />

        <button className={styles.submit} type="submit">
          Submit property
        </button>
      </form>
    );
  }
}
