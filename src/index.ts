import { useEffect, useState } from "react";
import * as Cookies from "js-cookie";

type Props = {
  variant: "variant1" | "variant2";
  isExperienceActive: boolean;
  isVariant1Active: boolean;
  isVariant2Active: boolean;
};

const useAbTest = (testName: string): Props => {
  const [variant, setVariant] = useState(Cookies.getJSON(testName) || null);
  useEffect(() => {
    window.addEventListener(testName, ((e: CustomEvent<string>) => {
      setVariant(e.detail);
      Cookies.set(testName, e.detail);
    }) as EventListener);
  }, [testName]);
  const isExperienceActive = variant === "variant1";
  const isVariant1Active = variant === "variant1";
  const isVariant2Active = variant === "variant2";
  return { variant, isExperienceActive, isVariant1Active, isVariant2Active };
};

export default useAbTest;
