import React from "react";

type Props = {
    name: string;
    link: string;
    dark: boolean;
};

export default function Icon({ name, link, dark }: Props) {
    return (
        <>
            {dark ? (
                <a href={link} className="w-5 sm:w-6">
                    <img
                        src={
                            require(`../../assets/svgs/${name}-icon-dark.svg`)
                                .default
                        }
                        alt={`${name}-icon-dark.svg`}
                    />
                </a>
            ) : (
                <a href={link} className="w-5 sm:w-6">
                    <img
                        src={
                            require(`../../assets/svgs/${name}-icon-light.svg`)
                                .default
                        }
                        alt={`${name}-icon-light.svg`}
                    />
                </a>
            )}
        </>
    );
}
