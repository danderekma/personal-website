import React from "react";
import useDarkMode from "use-dark-mode";
import DarkModeToggle from "react-dark-mode-toggle";
import { StaticImage } from "gatsby-plugin-image";

import FacebookIconLight from "../assets/svgs/facebook-icon-light.svg";
import InstagramIconLight from "../assets/svgs/instagram-icon-light.svg";

export default function Index(): React.ReactNode {
  const darkMode = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light"
  });

  return (
    <main className="flex flex-col justify-between h-screen transition duration-200 bg-white bg-repeat bg-grid-lg-light dark:bg-grid-lg-dark dark:bg-gray">
      <div className="flex justify-end w-full px-8 py-6">
        <DarkModeToggle
          onChange={darkMode.toggle}
          checked={darkMode.value}
          size={"80px"}
        />
      </div>
      <div className="relative z-10 flex justify-center">
        <StaticImage
          src="../assets/images/profile-pic-light.jpeg"
          alt="profile-pic-light.jpeg"
          placeholder="blurred"
          className="rounded-full w-80 dark:hidden"
        />
        <StaticImage
          src="../assets/images/profile-pic-dark.jpeg"
          alt="profile-pic-dark.jpeg"
          placeholder="blurred"
          className="hidden rounded-full w-80 dark:inline"
        />
      </div>
      <div className="relative flex flex-col justify-end gap-4 py-8 h-80 bg-light-gray dark:bg-dark-gray bottom-12">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl font-sf-bold dark:text-white">
            👋 Hi, I’m Derek!
          </h1>
          <h2 className="text-3xl font-sf-regular dark:text-white">
            I’m a student developer at UC Davis.
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <ul className="list-none">
            <li className="text-xl font-sf-light dark:text-white">
              ☕️ Fueled by coffee
            </li>
            <li className="text-xl font-sf-light dark:text-white">
              💼 Searching for internship...
            </li>
            <li className="text-xl font-sf-light dark:text-white">
              ✉️ danderekma@gmail.com
            </li>
          </ul>
        </div>
        <div className="flex justify-center gap-3">
          <a href="https://www.facebook.com/profile.php?id=100010707514748">
            <img src={FacebookIconLight} alt="facebook-icon-light.svg" />
          </a>
          <a href="https://www.instagram.com/danderekma/">
            <img src={InstagramIconLight} alt="instagram-icon-light.svg" />
          </a>
        </div>
      </div>
      <footer className="flex justify-center py-6 text-center font-sf-thin text-black/25 dark:text-white/25">
        Created with ❤️ by Derek Ma <br /> © 2022
      </footer>
    </main>
  );
}
