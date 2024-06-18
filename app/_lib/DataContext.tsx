'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

export const DataContext = createContext(
  {} as {
    showSlideshow: boolean;
    setShowSlideshow: Dispatch<SetStateAction<boolean>>;
    loadedImages: ReactNode[];
    setLoadedImages: Dispatch<SetStateAction<ReactNode[]>>;
  },
);

export default function DataProvider({ children }: { children: ReactNode }) {
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [loadedImages, setLoadedImages] = useState<ReactNode[]>([]);

  return (
    <DataContext.Provider
      value={{
        showSlideshow,
        setShowSlideshow,
        loadedImages,
        setLoadedImages,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
