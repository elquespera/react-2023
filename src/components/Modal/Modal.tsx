import React, { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import Button from '../Button/Button';

interface ModalProps {
  open: boolean;
  children?: ReactNode;
  title?: string;
  onClose?: () => void;
}

export default function Modal({ open, title, children, onClose }: ModalProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleWrapperClick = (e: React.MouseEvent) => {
    if (e.target === wrapperRef.current) handleClose();
  };

  if (!open) return null;
  return createPortal(
    <div className={styles.wrapper} ref={wrapperRef} onClick={handleWrapperClick}>
      <div className={styles.modal}>
        <h2 className={styles.title}>
          {title} <Button icon="close" className={styles.close} onClick={handleClose} />
        </h2>
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.body
  );
}
