import React from "react";

type Props = {
    name: string;
    link: string;
    dark: boolean;
};

export default function Icon({ name, link, dark }: Props) {
    return (
        <a href={link} className="w-5 sm:w-6">
            {dark ? (
                <img
                    src={
                        require(`../../assets/svgs/${name}-icon-dark.svg`)
                            .default
                    }
                    alt={`${name}-icon-dark.svg`}
                />
            ) : (
                <img
                    src={
                        require(`../../assets/svgs/${name}-icon-light.svg`)
                            .default
                    }
                    alt={`${name}-icon-light.svg`}
                />
            )}
        </a>
    );
}
