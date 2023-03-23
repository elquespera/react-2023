import clsx from 'clsx';
import React from 'react';
import styles from './Input.module.scss';

interface InputProps {
  type?: 'text' | 'date' | 'number' | 'file' | 'select' | 'radio' | 'checkbox';
  id?: string;
  className?: string;
  required?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  selectRef?: React.RefObject<HTMLSelectElement>;
  options?: string[];
  label?: string;
  value?: string;
  error?: boolean;
  errorMsg?: string;
}

const labelBefore = (type?: string) =>
  ['text', 'date', 'number', 'file', 'select', ''].includes(type || '');

export default class Input extends React.Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    const {
      type,
      id,
      className,
      required,
      value,
      label,
      error,
      errorMsg,
      options,
      inputRef,
      selectRef,
    } = this.props;

    return (
      <>
        {labelBefore(type) && (
          <label htmlFor={id}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        <div className={clsx(className, styles.inputWrapper)}>
          {type === 'select' ? (
            <select ref={selectRef}>
              {options && options.map((option, index) => <option key={index}>{option}</option>)}
            </select>
          ) : type === 'checkbox' || type === 'radio' ? (
            <label className={styles.radioLabel}>
              <input type={type} ref={inputRef} name={id} value={value} />
              {label}
            </label>
          ) : (
            <input
              type={type || 'text'}
              id={id}
              ref={inputRef}
              accept={type === 'file' ? 'image/*' : ''}
            />
          )}

          {error && errorMsg && <span className={styles.error}>{errorMsg}</span>}
        </div>
      </>
    );
  }
}
