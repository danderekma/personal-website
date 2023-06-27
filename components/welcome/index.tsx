"use client";

import { useState, useEffect } from "react";

import { useTheme } from "next-themes";
import Image from "next/image";

import DarkModeToggle from "react-dark-mode-toggle";

import IconRow from "./IconRow";
import Icon from "./Icon";

export default function Welcome() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col justify-between" id="welcome">
      <div className="flex h-max w-full justify-end self-start px-8 py-6">
        <DarkModeToggle
          checked={resolvedTheme === "dark"}
          onChange={() => {
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
          }}
        />
      </div>
      <div>
        <div className="relative z-10 flex justify-center">
          <Image
            src={
              resolvedTheme === "dark"
                ? "/images/profile-pic-dark.webp"
                : "/images/profile-pic-light.webp"
            }
            width={2000}
            height={2000}
            alt={`profile-pic-${resolvedTheme}.webp`}
            className="w-56 rounded-full sm:w-80"
          />
        </div>
        <div className="relative bottom-7 flex h-72 flex-col justify-center gap-3 bg-light-gray transition-all dark:bg-dark-gray sm:h-[22rem] sm:gap-5">
          <div className="flex flex-col items-center sm:gap-2">
            <h1 className="font-sf-bold text-3xl transition-all duration-100 dark:text-white sm:text-5xl">
              👋 Hi, I&apos;m Derek!
            </h1>
            <h2 className="font-sf-regular text-xl transition-all duration-100 dark:text-white sm:text-3xl">
              I&apos;m a student developer at UC Davis.
            </h2>
          </div>
          <div className="flex flex-col items-center text-center">
            <ul className="list-none">
              <li className="font-sf-light text-sm transition-all duration-100 dark:text-neutral-400 sm:text-xl">
                🌟 Full Stack Development
              </li>
              <li className="font-sf-light text-sm transition-all duration-100 dark:text-neutral-400 sm:text-xl">
                🏫 Computer Science at UC Davis
              </li>
              <li className="font-sf-light text-sm transition-all duration-100 dark:text-neutral-400 sm:text-xl">
                💼 Frontend Developer Intern at GBCS Group
              </li>
              <li className="font-sf-light text-sm transition-all duration-100 dark:text-neutral-400 sm:text-xl">
                <a href="mailto:danderekma@gmail.com">
                  ✉️ danderekma@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <IconRow>
            <Icon
              name="facebook"
              link="https://www.facebook.com/profile.php?id=100010707514748"
              dark={resolvedTheme === "dark"}
            />
            <Icon
              name="instagram"
              link="https://www.instagram.com/danderekma/"
              dark={resolvedTheme === "dark"}
            />
            <Icon
              name="github"
              link="https://github.com/danderekma"
              dark={resolvedTheme === "dark"}
            />
            <Icon
              name="linkedin"
              link="https://www.linkedin.com/in/danderekma/"
              dark={resolvedTheme === "dark"}
            />
            <Icon
              name="twitter"
              link="https://twitter.com/danderekma"
              dark={resolvedTheme === "dark"}
            />
          </IconRow>
        </div>
      </div>
      <div className="flex h-max justify-center py-6">
        <a href="#projects">
          <Image
            src="/svgs/down-arrow-light.svg"
            alt="down-arrow-light.svg"
            width={50}
            height={50}
          />
        </a>
      </div>
    </div>
  );
}
