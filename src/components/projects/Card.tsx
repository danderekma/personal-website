import React from "react";

type Props = {
    name: string;
    description: string;
    image: HTMLImageElement;
};

export default function Card({ name, description, image }: Props) {
    return <div>Card</div>;
}
