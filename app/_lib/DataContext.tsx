'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

export const DataContext = createContext(
  {} as {
    showSlideshow: boolean;
    setShowSlideshow: Dispatch<SetStateAction<boolean>>;
  },
);

export default function DataProvider({ children }: { children: ReactNode }) {
  const [showSlideshow, setShowSlideshow] = useState(false);

  return (
    <DataContext.Provider
      value={{
        showSlideshow,
        setShowSlideshow,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
