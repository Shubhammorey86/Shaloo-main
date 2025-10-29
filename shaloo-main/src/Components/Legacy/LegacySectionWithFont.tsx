"use client";
import React from "react";
import FontProvider from "./FontProvider";
import LegacySection from "./LegacySection";

const LegacySectionWithFont: React.FC = () => {
  return (
    <FontProvider>
      <LegacySection />
    </FontProvider>
  );
};

export default LegacySectionWithFont;
