import React from "react";

type Props = {
    name: string;
    description: string;
    image: React.ReactElement;
    link: string;
    redirect: string;
};

export default function Card({
    name,
    description,
    image,
    link,
    redirect
}: Props) {
    return (
        <div className="flex flex-col rounded-3xl bg-light-gray dark:bg-dark-gray h-max lg:h-80 lg:flex-row lg:min-w-[36rem]">
            {image}
            <div className="flex flex-col justify-center h-full p-8 sm:p-12">
                <h1 className="pb-2 text-xl transition duration-200 sm:text-3xl font-sf-bold dark:text-white">
                    {name}
                </h1>
                <p className="text-sm transition duration-200 sm:text-xl font-sf-light dark:text-white">
                    {description}
                </p>
                <a
                    className="self-end text-sm transition duration-200 w-max sm:text-xl font-sf-light dark:text-white"
                    href={link}
                >
                    {redirect}
                </a>
            </div>
        </div>
    );
}
