import React from "react";

type Props = {
    htmlFor: string;
    label: string;
};

export default function FormLabel({ htmlFor, label }: Props) {
    return (
        <label htmlFor={htmlFor} className="text-sm mb-2 font-medium text-gray-900">
            {label}
        </label>
    );
}
