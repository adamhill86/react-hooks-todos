import { useRef, useEffect } from 'react';

export const useEffectOnce = (callback: Function) => {
  const didRun = useRef(false);

  useEffect(() => {
    if (!didRun.current) {
      callback();
      didRun.current = true;
    }
  });
};
