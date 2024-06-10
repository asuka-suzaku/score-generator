import { createContext, useState } from "react";
import { defaultValues } from "../Store/StylesAtom";

export const StylesContext = createContext();

export default function StylesContextFunc({ children }) {
  const [stylesData, setStylesData] = useState({ defaultValues });

  return (
    <>
      <StylesContext.Provider value={{ stylesData, setStylesData }}>
        {children}
      </StylesContext.Provider>
    </>
  );
}
