import React from "react";

type Props = {
    children?: React.ReactNode;
};

export default function CardGrid({ children }: Props) {
    return (
        <div className="grid justify-center grid-cols-1 gap-x-48 gap-y-12 sm:gap-y-24 2xl:grid-cols-2">
            {children}
        </div>
    );
}
