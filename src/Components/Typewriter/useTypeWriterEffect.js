import { useEffect, useRef, useState } from "react";

export const useTypeWriterEffect = (text, interval) => {
  const [currentPos, setCurrentPos] = useState(0);
  const index = useRef(0);
  useEffect(() => {
    const typeInterval = setInterval(() => {
      setCurrentPos((value) => value + 1);
      index.current += 1;
      if (index.current > text.length) clearInterval(typeInterval);
    }, interval);
    return () => {
      clearInterval(typeInterval);
      index.current = 0;
      setCurrentPos(0);
    };
  }, [interval, text]);
  return text.substring(0, currentPos);
};
