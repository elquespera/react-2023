import clsx from 'clsx';
import styles from './Input.module.scss';
import {
  FieldErrors,
  UseFormRegister,
  FieldName,
  ValidationRule,
  Controller,
  Control,
} from 'react-hook-form';
import { PropertyData } from '../../types';

interface InputProps {
  name: FieldName<PropertyData>;
  label?: string;
  register?: UseFormRegister<PropertyData>;
  control?: Control<PropertyData>;
  type?: 'text' | 'date' | 'number' | 'file' | 'select' | 'radio' | 'checkbox';
  options?: string[];
  value?: string;

  className?: string;
  required?: boolean;
  pattern?: ValidationRule<RegExp>;
  errors?: FieldErrors<PropertyData>;
  errorMsg?: string;
}

const labelBefore = (type?: string) =>
  ['text', 'date', 'number', 'file', 'select', ''].includes(type || '');

export default function Input({
  name,
  label,
  register,
  control,
  type,
  value,
  options,
  className,
  required,
  pattern,
  errors,
  errorMsg,
}: InputProps) {
  const registerProps = register ? register(name, { required, pattern }) : {};

  return (
    <>
      {labelBefore(type) && (
        <label htmlFor={name}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={clsx(className, styles.inputWrapper)}>
        {type === 'select' ? (
          <select {...registerProps}>
            {options && options.map((option, index) => <option key={index}>{option}</option>)}
          </select>
        ) : type === 'checkbox' || type === 'radio' ? (
          <label className={styles.radioLabel}>
            <input type={type} {...registerProps} value={value} />
            {label}
          </label>
        ) : type === 'file' ? (
          <Controller
            name={name}
            control={control}
            render={({ field }) => {
              return (
                <input
                  type={'file'}
                  id={name}
                  accept={'image/*'}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    const image = file ? URL.createObjectURL(file) : undefined;
                    field.onChange(image);
                  }}
                />
              );
            }}
          />
        ) : (
          <input {...registerProps} id={name} type={type || 'text'} />
        )}

        {errors?.[name] && errorMsg && <span className={styles.error}>{errorMsg}</span>}
      </div>
    </>
  );
}
