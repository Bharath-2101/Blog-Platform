import React from "react";
import HeroSection from "@/sections/HeroSection/HeroSection";
import ArticlesSection from "@/sections/ArticlesSection/ArticlesSection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <ArticlesSection />
      <div className="h-[100dvh]"></div>
    </div>
  );
};

export default page;
