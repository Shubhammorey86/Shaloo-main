"use client";
import React, { ReactNode } from "react";

interface FontProviderProps {
  children: ReactNode;
}

const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500&display=swap"
        rel="stylesheet"
      />
      {children}
    </>
  );
};

export default FontProvider;
