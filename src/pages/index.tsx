import React from "react";
import { Helmet } from "react-helmet";

import useDarkMode from "use-dark-mode";
import DarkModeToggle from "react-dark-mode-toggle";

import { StaticImage } from "gatsby-plugin-image";

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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Derek Ma</title>
      </Helmet>
      <main className="flex flex-col justify-between min-h-screen transition duration-200 bg-white bg-grid-lg-light dark:bg-grid-lg-dark dark:bg-gray">
        <div className="flex justify-end w-full px-8 pt-6">
          <DarkModeToggle
            onChange={darkMode.toggle}
            checked={darkMode.value}
            size={"80px"}
          />
        </div>
        <div>
          <div className="relative z-10 flex justify-center">
            <StaticImage
              src="../assets/images/profile-pic-light.webp"
              alt="profile-pic-light.webp"
              className="w-56 sm:w-80 dark:hidden"
              imgClassName="rounded-full"
              placeholder="none"
            />
            <StaticImage
              src="../assets/images/profile-pic-dark.webp"
              alt="profile-pic-dark.webp"
              className="!hidden w-56 sm:w-80 dark:!inline"
              imgClassName="rounded-full"
              placeholder="none"
            />
          </div>
          <div className="relative flex flex-col justify-center gap-3 sm:gap-5 h-[250px] sm:h-[340px] bg-light-gray dark:bg-dark-gray bottom-7">
            <div className="flex flex-col items-center sm:gap-2">
              <h1 className="text-3xl sm:text-5xl font-sf-bold dark:text-white">
                👋 Hi, I’m Derek!
              </h1>
              <h2 className="text-xl sm:text-3xl font-sf-regular dark:text-white">
                I’m a student developer at UC Davis.
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <ul className="list-none">
                <li className="text-sm sm:text-xl font-sf-light dark:text-white">
                  ☕️ Fueled by coffee
                </li>
                <li className="text-sm sm:text-xl font-sf-light dark:text-white">
                  💼 Searching for internship...
                </li>
                <li className="text-sm sm:text-xl font-sf-light dark:text-white">
                  <a href="mailto:danderekma@gmail.com">
                    ✉️ danderekma@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex justify-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100010707514748"
                className="w-5 sm:w-6 dark:hidden"
              >
                <img src={FacebookIconLight} alt="facebook-icon-light.svg" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100010707514748"
                className="hidden w-5 sm:w-6 dark:inline"
              >
                <img src={FacebookIconDark} alt="facebook-icon-dark.svg" />
              </a>
              <a
                href="https://www.instagram.com/danderekma/"
                className="w-5 sm:w-6 dark:hidden"
              >
                <img src={InstagramIconLight} alt="instagram-icon-light.svg" />
              </a>
              <a
                href="https://www.instagram.com/danderekma/"
                className="hidden w-5 sm:w-6 dark:inline"
              >
                <img src={InstagramIconDark} alt="instagram-icon-dark.svg" />
              </a>
              <a
                href="https://github.com/danderekma"
                className="w-5 sm:w-6 dark:hidden"
              >
                <img src={GithubIconLight} alt="github-icon-light.svg" />
              </a>
              <a
                href="https://github.com/danderekma"
                className="hidden w-5 sm:w-6 dark:inline"
              >
                <img src={GithubIconDark} alt="github-icon-dark.svg" />
              </a>
              <a
                href="https://www.linkedin.com/in/danderekma/"
                className="w-5 sm:w-6 dark:hidden"
              >
                <img src={LinkedInIconLight} alt="linkedin-icon-light.svg" />
              </a>
              <a
                href="https://www.linkedin.com/in/danderekma/"
                className="hidden w-5 sm:w-6 dark:inline"
              >
                <img src={LinkedInIconDark} alt="linkedin-icon-dark.svg" />
              </a>
              <a
                href="https://twitter.com/danderekma"
                className="w-5 sm:w-6 dark:hidden"
              >
                <img src={TwitterIconLight} alt="twitter-icon-light.svg" />
              </a>
              <a
                href="https://twitter.com/danderekma"
                className="hidden w-5 sm:w-6 dark:inline"
              >
                <img src={TwitterIconDark} alt="twitter-icon-dark.svg" />
              </a>
            </div>
          </div>
        </div>
        <footer className="w-full pb-4 text-sm text-center sm:text-base font-sf-thin text-black/25 dark:text-white/25">
          Created with ❤️ by Derek Ma <br /> © 2022
        </footer>
      </main>
    </>
  );
}
