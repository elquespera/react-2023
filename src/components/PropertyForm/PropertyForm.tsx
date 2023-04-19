import clsx from 'clsx';
import { useState } from 'react';
import { ADDRESS_PATTERN, TITLE_PATTERN } from '../../consts';
import { PropertyData } from '../../types';
import Input from '../Input/Input';
import SnackBar from '../SnackBar/SnackBar';
import styles from './PropertyForm.module.scss';
import { useForm } from 'react-hook-form';
import { addSubmission } from '../../store/submissions';
import { useAppDispatch } from '../../store/hooks';

export default function PropertyForm() {
  const [successMsg, setSuccessMsg] = useState<string>();
  const dispatch = useAppDispatch();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PropertyData>();

  const submit = (data: PropertyData) => {
    dispatch(addSubmission({ ...data, id: crypto.randomUUID() }));
    setSuccessMsg('Your property was added successfully!');
    reset();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <h3>Add new property</h3>
        <div className={styles.table}>
          <Input
            name="title"
            label="Title"
            register={register}
            required
            pattern={TITLE_PATTERN}
            errors={errors}
            errorMsg="Please provide property title (at least 3 characters)"
          />

          <Input
            name="address"
            label="Address"
            register={register}
            required
            pattern={ADDRESS_PATTERN}
            errors={errors}
            errorMsg="Please provide property address (at least 10 characters)"
          />

          <Input
            name="price"
            label="Price"
            type="number"
            register={register}
            required
            errors={errors}
            errorMsg="Please provide property price (must be a positive number)"
          />

          <Input
            name="rooms"
            label="Rooms"
            type="select"
            register={register}
            required
            options={['', '1', '2', '3', '4', '5+']}
            errors={errors}
            errorMsg="Please select the number of rooms"
          />

          <Input
            name="availableFrom"
            label="Available from"
            type="date"
            register={register}
            required
            errors={errors}
            errorMsg="Please provide property availability"
          />

          <Input name="image" register={register} control={control} type="file" label="Image" />

          <span />

          <div className={styles.inputWrapper}>
            <div className={styles.radioWrapper}>
              <Input
                name="purpose"
                type="radio"
                register={register}
                label="Sell"
                value="sale"
                required
              />
              <Input
                name="purpose"
                type="radio"
                register={register}
                label="Rent"
                value="rent"
                required
              />
            </div>
            {errors.purpose && (
              <span className={styles.error}>Please select the purpose of listing </span>
            )}
          </div>
        </div>

        <Input
          name="agree"
          label="I agree to the Terms & Conditions"
          type="checkbox"
          required
          register={register}
          className={styles.agree}
          errors={errors}
          errorMsg="You have to agree to T&C before adding the property"
        />

        <button
          className={clsx('btn-filled', styles.submit)}
          type="submit"
          data-testid="submit-btn"
        >
          Submit property
        </button>
      </form>
      <SnackBar title={successMsg} onClose={() => setSuccessMsg(undefined)} />
    </>
  );
}
