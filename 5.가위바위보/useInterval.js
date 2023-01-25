import { useRef, useEffect } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => { //componentDidMount, componentDidUpdate 역할 (1:1 대응은 아님)
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  return savedCallback.current; //componentWillUnmount 역할
}

export default useInterval;
