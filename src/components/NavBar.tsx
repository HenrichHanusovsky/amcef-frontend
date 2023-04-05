import Link from "next/link";
import React from "react";

type Props = {};

export default function NavBar({}: Props) {
    return (
        <nav className="bg-white p-4 mb-4 rounded-xl w-full">
            <div className="flex items-end">
                <Link className="text-xl font-bold" href={"/"}>
                    Amcef.
                </Link>
            </div>
        </nav>
    );
}
