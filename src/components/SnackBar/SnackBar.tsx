import React from 'react';
import { SNACKBAR_TIMEOUT } from '../../consts';
import Icon from '../Icon/Icon';
import styles from './SnackBar.module.scss';

interface SnackBarProps {
  title?: string;
  onClose?: () => void;
}

export default class SnackBar extends React.Component<SnackBarProps> {
  timer?: NodeJS.Timeout;

  constructor(props: SnackBarProps) {
    super(props);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    this.setTimer();
  }

  componentDidUpdate(prevProps: Readonly<SnackBarProps>) {
    if (prevProps.title !== this.props.title) {
      this.setTimer();
    }
  }

  componentWillUnmount(): void {
    clearTimeout(this.timer);
  }

  setTimer() {
    clearInterval(this.timer);
    this.timer = setTimeout(() => this.close(), SNACKBAR_TIMEOUT);
  }

  close() {
    if (this.props.onClose) this.props.onClose();
    clearTimeout(this.timer);
  }

  render() {
    const { title } = this.props;
    if (!title) return null;

    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <button className={styles.close} onClick={this.close}>
            <Icon type="close" />
          </button>
          <span className={styles.title}>{title}</span>
        </div>
      </div>
    );
  }
}
