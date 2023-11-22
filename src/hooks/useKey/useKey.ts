import React from "react";

const TAG = 'useKey'

export function useKey(key, callback) {
    if(!key) {
        throw new Error(`${TAG} key prop cannot be falsy, actual value: <${key}>`);
    }

    if(typeof key !== 'string') {
        throw new Error(`${TAG} expected key prop to be of type string, actual type: <${typeof key}>`);
    }

    if(typeof callback !== 'function') {
        throw new Error(`${TAG} expected callback a function, actual type: <${typeof callback}>`);
    }

    React.useEffect(() => {
        const keyDownHandler = (e) => {
            if(e.key === key) {
                callback();
            }
        }
        window.addEventListener('keydown', keyDownHandler);

        return () => {
            window.removeEventListener('keydown', keyDownHandler);
        }
    });
}