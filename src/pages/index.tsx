import React from "react";
import { Helmet } from "react-helmet";

import useDarkMode from "use-dark-mode";
import DarkModeToggle from "react-dark-mode-toggle";

import { StaticImage } from "gatsby-plugin-image";

import IconRow from "../components/welcome/IconRow";
import Icon from "../components/welcome/Icon";

import DownArrowLight from "../assets/svgs/down-arrow-light.svg";

import CardGrid from "../components/projects/CardGrid";
import Card from "../components/projects/Card";

export default function Index(): React.ReactNode {
    const darkMode = useDarkMode(false, {
        classNameDark: "dark",
        classNameLight: "light"
    });

    return (
        <main className="transition duration-200 bg-white bg-repeat grid-col bg-grid-sm-light dark:bg-grid-sm-dark sm:bg-grid-lg-light sm:dark:bg-grid-lg-dark dark:bg-gray">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Derek Ma</title>
            </Helmet>
            <div className="grid min-h-screen">
                <div className="flex self-start justify-end w-full px-8 py-6 h-max">
                    <DarkModeToggle
                        onChange={darkMode.toggle}
                        checked={darkMode.value}
                        size={"80px"}
                    />
                </div>
                <div className="self-center h-max">
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
                    <div className="relative flex flex-col transition duration-200 justify-center gap-3 sm:gap-5 h-[250px] sm:h-[340px] bg-light-gray dark:bg-dark-gray bottom-7">
                        <div className="flex flex-col items-center sm:gap-2">
                            <h1 className="text-3xl transition duration-200 sm:text-5xl font-sf-bold dark:text-white">
                                👋 Hi, I'm Derek!
                            </h1>
                            <h2 className="text-xl transition duration-200 sm:text-3xl font-sf-regular dark:text-white">
                                I'm a student developer at UC Davis.
                            </h2>
                        </div>
                        <div className="flex flex-col items-center">
                            <ul className="list-none">
                                <li className="text-sm transition duration-200 sm:text-xl font-sf-light dark:text-white">
                                    ☕️ Fueled by coffee
                                </li>
                                <li className="text-sm transition duration-200 sm:text-xl font-sf-light dark:text-white">
                                    💼 Searching for internship...
                                </li>
                                <li className="text-sm transition duration-200 sm:text-xl font-sf-light dark:text-white">
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
                                dark={darkMode.value}
                            />
                            <Icon
                                name="instagram"
                                link="https://www.instagram.com/danderekma/"
                                dark={darkMode.value}
                            />
                            <Icon
                                name="github"
                                link="https://github.com/danderekma"
                                dark={darkMode.value}
                            />
                            <Icon
                                name="linkedin"
                                link="https://www.linkedin.com/in/danderekma/"
                                dark={darkMode.value}
                            />
                            <Icon
                                name="twitter"
                                link="https://twitter.com/danderekma"
                                dark={darkMode.value}
                            />
                        </IconRow>
                    </div>
                </div>
                <div className="flex self-end justify-center py-6 h-max">
                    <a href="#projects" className="scroll-smooth">
                        <img src={DownArrowLight} alt="down-arrow-light.svg" />
                    </a>
                </div>
            </div>
            <div className="py-12 px-[15%] sm:py-24 sm:px-[20%]" id="projects">
                <h1 className="py-6 text-2xl transition duration-200 sm:text-4xl font-sf-bold dark:text-white">
                    Projects
                </h1>
                <CardGrid>
                    <Card
                        name="AggieExplorer"
                        description="A full-stack web application developed to provide grading distributions and enrollment statistics for UC Davis students."
                        image={
                            <StaticImage
                                src="../assets/images/aggie-explorer.jpeg"
                                alt="aggie-explorer.jpeg"
                                className="w-full h-full lg:w-64"
                                imgClassName="object-left rounded-3xl"
                                placeholder="none"
                            />
                        }
                        redirect="Read More >"
                        link="https://codelabdavis.medium.com/aggieexplorer-winter-spring-21-mentored-project-41c3f4f18a5"
                    />
                    <Card
                        name="UC Davis New Vietnam Studies Initiative"
                        description="A landing page for the New Vienam Studies Initiative at UC Davis created with Next.js."
                        image={
                            <StaticImage
                                src="../assets/images/nvsi.svg"
                                alt="nvsi.svg"
                                className="w-full h-full lg:w-64"
                                imgClassName="object-right rounded-3xl"
                                placeholder="none"
                            />
                        }
                        redirect="Visit >"
                        link="https://newvietnam.ucdavis.edu"
                    />
                </CardGrid>
            </div>
            <footer className="w-full pb-4 text-sm text-center transition duration-200 sm:text-base font-sf-thin text-black/25 dark:text-white/25">
                Created with ❤️ by Derek Ma <br /> © 2022
            </footer>
        </main>
    );
}
