import { Children, ReactNode } from "react";

type EachUtilsProps<T> = {
  render: (item: T, index: number) => ReactNode;
  of: T[];
};

export const EachUtils = <T,>({ render, of }: EachUtilsProps<T>) => {
  if (of.length < 1) {
    console.log("Data is empty");
    return null;
  }
  if (typeof render !== "function") {
    console.log("Render is not a function");
    return null;
  }
  return <>{Children.toArray(of.map((item, i) => render(item, i)))}</>;
};
