import React from "react";

type Props = {
    name: string;
    description: string;
    image: React.ReactElement;
};

export default function Card({ name, description, image }: Props) {
    return <div className="bg-light-gray dark:bg-dark-gray">Card</div>;
}
