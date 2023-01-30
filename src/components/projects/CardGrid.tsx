import React from "react";

type Props = {
    children?: React.ReactNode;
};

export default function CardGrid({ children }: Props) {
    return <div className="grid justify-center">{children}</div>;
}
