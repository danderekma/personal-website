import React from "react";

type Props = {
    children?: React.ReactNode;
};

export default function CardGrid({ children }: Props) {
    return (
        <div className="grid justify-center grid-cols-2 gap-x-36">
            {children}
        </div>
    );
}
