import { useEffect, useState } from 'react';
import * as Cookies from 'js-cookie';

type Props = {
  variant?: 'variant1' | 'variant2';
};

const useAbTest = (testName: string): Props => {
  const [variant, setVariant] = useState(Cookies.getJSON(testName) || null);
  useEffect(() => {
    window.addEventListener(testName, ((e: CustomEvent<string>) => {
      setVariant(e.detail);
      Cookies.set(testName, e.detail);
    }) as EventListener);
  }, [testName]);
  return { variant };
};

export default useAbTest;