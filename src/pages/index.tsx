import React from "react";
import useDarkMode from "use-dark-mode";
import DarkModeToggle from "react-dark-mode-toggle";

import ProfilePicLight from "../assets/images/profile-pic-light.jpeg";
import ProfilePicDark from "../assets/images/profile-pic-dark.jpeg";
import FacebookIconLight from "../assets/svgs/facebook-icon-light.svg";
import FacebookIconDark from "../assets/svgs/facebook-icon-dark.svg";
import InstagramIconLight from "../assets/svgs/instagram-icon-light.svg";
import InstagramIconDark from "../assets/svgs/instagram-icon-dark.svg";
import GithubIconLight from "../assets/svgs/github-icon-light.svg";
import GithubIconDark from "../assets/svgs/github-icon-dark.svg";
import LinkedInIconLight from "../assets/svgs/linkedin-icon-light.svg";
import LinkedInIconDark from "../assets/svgs/linkedin-icon-dark.svg";
import TwitterIconLight from "../assets/svgs/twitter-icon-light.svg";
import TwitterIconDark from "../assets/svgs/twitter-icon-dark.svg";

export default function Index(): React.ReactNode {
  const darkMode = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light"
  });

  return (
    <main className="flex flex-col justify-between h-screen transition duration-200 bg-white bg-grid-lg-light dark:bg-grid-lg-dark dark:bg-gray">
      <div className="flex justify-end w-full px-8 pt-6">
        <DarkModeToggle
          onChange={darkMode.toggle}
          checked={darkMode.value}
          size={"80px"}
        />
      </div>
      <div>
        <div className="relative z-10 flex justify-center">
          <img
            src={ProfilePicLight}
            alt="profile-pic-light.jpeg"
            className="rounded-full w-80 dark:hidden"
          />
          <img
            src={ProfilePicDark}
            alt="profile-pic-dark.jpeg"
            className="hidden rounded-full w-80 dark:inline"
          />
        </div>
        <div className="relative flex flex-col justify-center gap-5 h-[340px] bg-light-gray dark:bg-dark-gray bottom-7">
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
                <a href="mailto:danderekma@gmail.com">
                  ✉️ danderekma@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100010707514748"
              className="dark:hidden"
            >
              <img src={FacebookIconLight} alt="facebook-icon-light.svg" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100010707514748"
              className="hidden dark:inline"
            >
              <img src={FacebookIconDark} alt="facebook-icon-dark.svg" />
            </a>
            <a
              href="https://www.instagram.com/danderekma/"
              className="dark:hidden"
            >
              <img src={InstagramIconLight} alt="instagram-icon-light.svg" />
            </a>
            <a
              href="https://www.instagram.com/danderekma/"
              className="hidden dark:inline"
            >
              <img src={InstagramIconDark} alt="instagram-icon-dark.svg" />
            </a>
            <a href="https://github.com/danderekma" className="dark:hidden">
              <img src={GithubIconLight} alt="github-icon-light.svg" />
            </a>
            <a
              href="https://github.com/danderekma"
              className="hidden dark:inline"
            >
              <img src={GithubIconDark} alt="github-icon-dark.svg" />
            </a>
            <a
              href="https://www.linkedin.com/in/danderekma/"
              className="dark:hidden"
            >
              <img src={LinkedInIconLight} alt="linkedin-icon-light.svg" />
            </a>
            <a
              href="https://www.linkedin.com/in/danderekma/"
              className="hidden dark:inline"
            >
              <img src={LinkedInIconDark} alt="linkedin-icon-dark.svg" />
            </a>
            <a href="https://twitter.com/danderekma" className="dark:hidden">
              <img src={TwitterIconLight} alt="twitter-icon-light.svg" />
            </a>
            <a
              href="https://twitter.com/danderekma"
              className="hidden dark:inline"
            >
              <img src={TwitterIconDark} alt="twitter-icon-dark.svg" />
            </a>
          </div>
        </div>
      </div>
      <footer className="w-full pb-4 text-center font-sf-thin text-black/25 dark:text-white/25">
        Created with ❤️ by Derek Ma <br /> © 2022
      </footer>
    </main>
  );
}
