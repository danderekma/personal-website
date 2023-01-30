import React from "react";

type Props = {
    buttons: JSX.Element[];
};

export default function ButtonGrid({ buttons }: Props) {
    return <div className="">{...buttons}</div>;
}
