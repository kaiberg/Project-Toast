import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import ToastProvider from "../ToastProvider";
import {useKey} from "../../hooks/useKey";

function App() {
    return (
        <>
            <ToastProvider>
                <ToastPlayground/>
            </ToastProvider>
            <Footer/>
        </>
    );
}

export default App;
