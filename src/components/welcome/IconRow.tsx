import React from "react";

type Props = {
    children?: React.ReactNode;
};

export default function IconRow({ children }: Props) {
    return <div className="flex justify-center gap-3">{children}</div>;
}
