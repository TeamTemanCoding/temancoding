import { useEffect, useState } from "react";

const useScroll = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isScroll };
};

export default useScroll;
