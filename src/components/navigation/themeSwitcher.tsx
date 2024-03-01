"use client";

import { useThemeContext } from "@/context/themeContext";
import Image from "next/image";
import { useMemo } from "react";

export const ThemeSwitcher = () => {
  const { toggleThemeHandler, themeTitle } = useThemeContext();

  const imageSrc = useMemo(
    () =>
      themeTitle === "LIGHT" ? "/images/icon-sun.svg" : "/images/icon-moon.svg",
    [themeTitle]
  );

  return (
    <button onClick={toggleThemeHandler} className="">
      <Image
        src={imageSrc}
        alt="sun-or-moon-theme-button"
        height={40}
        width={40}
        className="h-5 w-5 lg:h-6 lg:w-6"
        sizes="min(1024px): 64px, 32px"
      />
    </button>
  );
};
