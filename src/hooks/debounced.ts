import { useEffect, useState } from "react";

interface IDebounced {
  searchQuery: string;
  delay: number;
}

export const useDeBounced = ({ searchQuery, delay }: IDebounced) => {
  const [deBouncedValue, setDeBouncedValue] = useState<string>(searchQuery);

  useEffect(() => {
    const deBouncedHandler = setTimeout(() => {
      setDeBouncedValue(searchQuery);
    }, delay);
    return () => {
      clearTimeout(deBouncedHandler);
    };
  }, [searchQuery, delay]);

  return deBouncedValue;
};
