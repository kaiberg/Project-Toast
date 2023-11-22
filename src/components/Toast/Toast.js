import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({variant, children, onClose}) {
    if(!Object.keys(ICONS_BY_VARIANT).includes(variant)) {
        throw new Error(`unsupported variant: <${variant}>, expected one of: <${Object.keys(ICONS_BY_VARIANT)}>`)
    }

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Info size={24} />
      </div>
      <p className={styles.content}>
          <VisuallyHidden>{variant}{' '}-</VisuallyHidden>
          {children}
      </p>
      <button className={styles.closeButton} aria-label={'Dismiss message'} aria-live={'off'} onClick={onClose}>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
