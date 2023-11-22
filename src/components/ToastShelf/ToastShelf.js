import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {ToastContext} from "../ToastProvider";
import {useKey} from "../../hooks/useKey";

function ToastShelf() {
    const {toasts,setToasts} = React.useContext(ToastContext);

    const onToastRemoveClicked = () => {
        setToasts((p) => {
            return [...p.filter((toast) => toast !== toastRemoved)];
        })
    }

    useKey('Escape', () => {
        setToasts([]);
    })

    return (
        <ol className={styles.wrapper} role={'region'} aria-live={'polite'} aria-label={'Notification'}>
            {toasts.map((toast) => {
                const {variant, content} = toast;
                const id = crypto.randomUUID();

                return (
                    <li className={styles.toastWrapper} key={id}>
                        <Toast variant={variant} onClose={() => onToastRemoveClicked(toast)}>{content}</Toast>
                    </li>

                )
            })}
        </ol>
    );
}

export default ToastShelf;
