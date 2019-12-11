// eslint consistent-return: ["error", { "treatUndefinedAsUnspecified": true }]
import { useEffect, useRef } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return null;
  }, [delay]);
};
