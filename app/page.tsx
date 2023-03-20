"use client";

import { useState, useEffect } from "react";

import { useTheme } from "next-themes";
import Image from "next/image";

import DarkModeToggle from "react-dark-mode-toggle";
import IconRow from "../components/welcome/IconRow";
import Icon from "../components/welcome/Icon";
import CardGrid from "../components/projects/CardGrid";
import Card from "../components/projects/Card";

export default function Home(): React.ReactNode {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <main className="transition-all bg-white bg-repeat grid-col bg-grid-sm-light dark:bg-grid-sm-dark sm:bg-grid-lg-light sm:dark:bg-grid-lg-dark dark:bg-gray">
            <div className="grid min-h-screen">
                <div className="flex self-start justify-end w-full px-8 py-6 h-max">
                    <DarkModeToggle
                        checked={resolvedTheme === "dark"}
                        onChange={() => {
                            setTheme(
                                resolvedTheme === "dark" ? "light" : "dark"
                            );
                        }}
                    />
                </div>
                <div className="self-center h-max">
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
                    <div className="relative flex flex-col justify-center h-64 gap-3 transition-all sm:gap-5 sm:h-80 bg-light-gray dark:bg-dark-gray bottom-7">
                        <div className="flex flex-col items-center sm:gap-2">
                            <h1 className="text-3xl transition-all duration-100 sm:text-5xl font-sf-bold dark:text-white">
                                👋 Hi, I&apos;m Derek!
                            </h1>
                            <h2 className="text-xl transition-all duration-100 sm:text-3xl font-sf-regular dark:text-white">
                                I&apos;m a student developer at UC Davis.
                            </h2>
                        </div>
                        <div className="flex flex-col items-center">
                            <ul className="list-none">
                                <li className="text-sm transition-all duration-100 sm:text-xl font-sf-light dark:text-white">
                                    ☕️ Fueled by coffee
                                </li>
                                <li className="text-sm transition-all duration-100 sm:text-xl font-sf-light dark:text-white">
                                    💼 Searching for internship...
                                </li>
                                <li className="text-sm transition-all duration-100 sm:text-xl font-sf-light dark:text-white">
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
                <div className="flex self-end justify-center py-6 h-max">
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
            <div className="py-12 px-[15%] sm:py-24 sm:px-[20%]" id="projects">
                <h1 className="py-6 text-2xl transition-all duration-100 sm:text-4xl font-sf-bold dark:text-white">
                    Projects
                </h1>
                <CardGrid>
                    <Card
                        name="AggieExplorer"
                        description="A full-stack web application developed to provide grading distributions and enrollment statistics for UC Davis students."
                        image={
                            <Image
                                src="/images/aggie-explorer.jpeg"
                                alt="aggie-explorer.jpeg"
                                className="object-cover object-left w-full h-full rounded-3xl"
                                width={3024}
                                height={1673}
                            />
                        }
                        link="https://codelabdavis.medium.com/aggieexplorer-winter-spring-21-mentored-project-41c3f4f18a5"
                    />
                    <Card
                        name="UC Davis New Vietnam Studies Initiative"
                        description="A landing page for the New Vietnam Studies Initiative at UC Davis created with Next.js."
                        image={
                            <Image
                                src="/images/nvsi.svg"
                                alt="nvsi.svg"
                                className="object-cover object-right w-full h-full rounded-3xl"
                                width={3024}
                                height={1673}
                            />
                        }
                        link="https://newvietnam.ucdavis.edu"
                    />
                </CardGrid>
            </div>
            <footer className="w-full pb-4 text-sm text-center transition-all duration-100 sm:text-base font-sf-thin text-black/25 dark:text-white/25">
                Created with ❤️ by Derek Ma <br /> © 2022
            </footer>
        </main>
    );
}
