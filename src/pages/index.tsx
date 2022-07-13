import React from "react";
import useDarkMode from "use-dark-mode";
import DarkModeToggle from "react-dark-mode-toggle";

export default function Index(): React.ReactNode {
  const darkMode = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light"
  });

  return (
    <main className="bg-grid-lg-light bg-white dark:bg-grid-lg-dark dark:bg-gray bg-repeat transition duration-500 h-screen">
      <div className="w-full flex justify-end px-8 py-6">
        <DarkModeToggle
          onChange={darkMode.toggle}
          checked={darkMode.value}
          size={"80px"}
        />
      </div>
      <h1>Derek Ma</h1>
    </main>
  );
}
