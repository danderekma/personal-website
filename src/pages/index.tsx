import React from "react";
import useDarkMode from "use-dark-mode";
import DarkModeToggle from "react-dark-mode-toggle";
import { StaticImage } from "gatsby-plugin-image";

export default function Index(): React.ReactNode {
  const darkMode = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light"
  });

  return (
    <main className="h-screen transition duration-500 bg-white bg-repeat bg-grid-lg-light dark:bg-grid-lg-dark dark:bg-gray">
      <div className="flex justify-end w-full px-8 py-6">
        <DarkModeToggle
          onChange={darkMode.toggle}
          checked={darkMode.value}
          size={"80px"}
        />
      </div>
      <div className="flex justify-center">
        <StaticImage
          src="../assets/images/profile-pic-light.jpeg"
          alt="profile-pic-light"
          placeholder="blurred"
          className="rounded-full w-72 dark:hidden"
        />
        <StaticImage
          src="../assets/images/profile-pic-dark.jpeg"
          alt="profile-pic-dark"
          placeholder="blurred"
          className="hidden rounded-full w-72 dark:inline"
        />
      </div>
    </main>
  );
}
