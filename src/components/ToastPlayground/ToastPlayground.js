import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from "../Toast";
import ToastShelf from "../ToastShelf";
import ToastForm from "../ToastForm";
import {ToastContext} from "../ToastProvider";

export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

// In ToastPlayground.js, you'll find most of the markup you'll need, but there are two problems:
//
// All of the inputs are uncontrolled, meaning we can't easily access their values in React.
// We should use React state to drive all form controls.
// We're only given a single radio button. We need one for each valid variant.
// Our Toast component should support 4 different variants:
//
//     notice
// warning
// success
// error
// This first exercise is meant to be a review of the concepts learned in Module 1 and Module 2. So, it might be worth brushing up on some of those earlier lessons. In particular, the Input Cheatsheet bonus lesson has some handy info about binding different types of form inputs!
//
//     Acceptance Criteria:
//
//     The “Message” textarea should be driven by React state✅
// Using the data in the VARIANT_OPTIONS array, render 4 radio buttons within✅
// the “Variant” row. They should all be part of the same group (so that only one can be selected at a time).
// They should also be driven by React state.✅
//     There should be no key warnings in the console.✅

function ToastPlayground() {
    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png"/>
                <h1>Toast Playground</h1>
            </header>

            <ToastShelf />
            <ToastForm/>
        </div>
    );
}

export default ToastPlayground;
