import React from 'react';
import { getLocalStorage, setLocalStorage } from '../../lib/storage';
import { EmptyProps } from '../../types';
import styles from './SearchBar.module.scss';

interface SearchBarState {
  inputValue: string;
}

export default class SearchBar extends React.Component<EmptyProps, SearchBarState> {
  constructor(props: EmptyProps) {
    super(props);
    this.state = { inputValue: '' };
  }

  componentDidMount() {
    const { search } = getLocalStorage();
    if (search) this.setState({ inputValue: search });
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: event.target.value });
    setLocalStorage({ search: event.target.value });
  }

  render() {
    return (
      <label className={styles.wrapper}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
          className={styles.input}
        />
      </label>
    );
  }
}
