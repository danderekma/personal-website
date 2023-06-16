"use client";

import { useState, useEffect } from "react";

import { useTheme } from "next-themes";
import Image from "next/image";

import DarkModeToggle from "react-dark-mode-toggle";
import IconRow from "../components/welcome/IconRow";
import Icon from "../components/welcome/Icon";
import CardGrid from "../components/projects/CardGrid";
import Card from "../components/projects/Card";

export default function Home() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <main className="bg-white bg-grid-sm-light bg-fixed bg-repeat transition-all dark:bg-gray dark:bg-grid-sm-dark sm:bg-grid-lg-light sm:dark:bg-grid-lg-dark">
            <div
                className="flex min-h-screen flex-col justify-between"
                id="welcome"
            >
                <div className="flex h-max w-full justify-end self-start px-8 py-6">
                    <DarkModeToggle
                        checked={resolvedTheme === "dark"}
                        onChange={() => {
                            setTheme(
                                resolvedTheme === "dark" ? "light" : "dark"
                            );
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
                                    🌟 Web/Mobile Development
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
            <div className="py-12 px-[15%] sm:py-24 sm:px-[20%]" id="projects">
                <h1 className="py-6 font-sf-bold text-2xl transition-all duration-100 dark:text-white sm:text-4xl">
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
                                className="h-full w-full rounded-3xl object-cover object-left"
                                width={3024}
                                height={1673}
                            />
                        }
                        link="https://codelabdavis.medium.com/aggieexplorer-605c9d67965c"
                    />
                    <Card
                        name="UC Davis New Vietnam Studies Initiative"
                        description="A landing page for the New Vietnam Studies Initiative at UC Davis created with Next.js."
                        image={
                            <Image
                                src="/images/nvsi.svg"
                                alt="nvsi.svg"
                                className="h-full w-full rounded-3xl object-cover object-right"
                                width={3024}
                                height={1673}
                            />
                        }
                        link="https://newvietnam.ucdavis.edu"
                    />
                    <Card
                        name="CodeLab Training Tool"
                        description="An internal training tool that allows associates to create and consume educational material and track personal progress."
                        image={
                            <div className="flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-r from-[#65DEF9] to-[#509DE5]">
                                <Image
                                    src="/images/training-tool-cow.svg"
                                    alt="training-tool-cow.svg"
                                    className="h-[75%] w-auto rounded-3xl object-cover"
                                    width={3024}
                                    height={1673}
                                />
                            </div>
                        }
                        link="https://codelabdavis.medium.com"
                    />
                </CardGrid>
            </div>
            <div
                className="py-12 px-[15%] sm:py-24 sm:px-[20%]"
                id="contactForm"
            >
                <h1 className="py-6 font-sf-bold text-2xl transition-all duration-100 dark:text-white sm:text-4xl">
                    Contact Me
                </h1>
            </div>
            <footer className="w-full p-4 text-center font-sf-thin text-sm text-black/25 transition-all duration-100 dark:text-white/25 sm:text-base">
                Created with ❤️ by Derek Ma <br /> © 2023
            </footer>
        </main>
    );
}
