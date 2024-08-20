import React, { createContext, useState } from 'react';

export interface HistoryType{
  id : number;
  expression : string;
  result : string;
}

interface HistoryContextType{
  history: HistoryType[];
  setHistory:  React.Dispatch<React.SetStateAction<HistoryType[]>>
}

export const HistoryContext = createContext<HistoryContextType | null>(null);

export default function HistoryContextProvider({ children } : {children : JSX.Element}){
  const [history, setHistory] = useState<HistoryType[]>([]);

  return <HistoryContext.Provider value={{ history, setHistory }}>{children}</HistoryContext.Provider>;
}
