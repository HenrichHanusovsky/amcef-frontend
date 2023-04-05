/* eslint-disable react/display-name */
import React from "react";

type Props = {
    name: string;
    type?: string;
};

const FormInput = React.forwardRef<HTMLInputElement, Props>(({ name, type }, ref) => {
    return (
        <input
            type={type}
            name={name}
            required
            ref={ref}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
        />
    );
});

export default FormInput;
