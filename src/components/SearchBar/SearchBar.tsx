import React from 'react';
import { getLocalStorage, setLocalStorage } from '../../lib/storage';
import { EmptyProps } from '../../types';
import Icon from '../Icon/Icon';
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

  componentWillUnmount() {
    setLocalStorage({ search: this.state.inputValue });
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <label className={styles.wrapper}>
        <Icon type="search" className={styles.icon} />
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
