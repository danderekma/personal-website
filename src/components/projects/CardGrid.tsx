import React from "react";

type Props = {
    children?: React.ReactNode;
};

export default function CardGrid({ children }: Props) {
    return <div>{children}</div>;
}
