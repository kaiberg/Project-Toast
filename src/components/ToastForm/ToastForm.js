import styles from "../ToastPlayground/ToastPlayground.module.css";
import Button from "../Button";
import React from "react";
import {VARIANT_OPTIONS} from "../ToastPlayground";
import Toast from "../Toast";
import {ToastContext} from "../ToastProvider";

const TAG = 'ToastForm';

export default function ToastForm() {
    const {setToasts} = React.useContext(ToastContext);
    const [message, setMessage] = React.useState('');
    const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0]);
    const [showPreview, setShowPreview] = React.useState(true);

    const onToastPopped = () => {
        setShowPreview(true);
    }

    return (
        <React.Fragment>
            {message.length > 0 && showPreview &&
                <Toast variant={toastVariant} onClose={() => setShowPreview(false)}>{message}</Toast>}
            <form onSubmit={(e) => {
                e.preventDefault();
                const toast = {content: message, variant: toastVariant};
                setToasts(p => [...p, toast])
                setMessage('');
                setToastVariant(VARIANT_OPTIONS[0]);
            }}>

                <div className={styles.controlsWrapper}>
                    <div className={styles.row}>
                        <label
                            htmlFor="message"
                            className={styles.label}
                            style={{alignSelf: 'baseline'}}
                        >
                            Message
                        </label>
                        <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={(e) => {
                const {value} = e.target;
                setMessage(value);
            }
            }/>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label}>Variant</div>
                        <div
                            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                        >
                            {VARIANT_OPTIONS.map(variant => {
                                const id = `variant-${variant}`;

                                return (
                                    <label htmlFor={id} key={variant}>
                                        <input
                                            id={id}
                                            type="radio"
                                            name="variant"
                                            value={variant}
                                            checked={toastVariant === variant}
                                            onChange={(e) => setToastVariant(e.target.value)}
                                        />
                                        {variant}
                                    </label>
                                );

                            })}


                            {/* TODO Other Variant radio buttons here */}
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label}/>
                        <div
                            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                        >
                            <Button type='submit'>Pop Toast!</Button>
                        </div>
                    </div>
                </div>
            </form>
        </React.Fragment>

    )

}