import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
    const [toasts,setToasts] = React.useState([]);
    const value = React.useMemo(() => ({toasts, setToasts})
    , [toasts])

    return (
        <ToastContext.Provider value={value}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
