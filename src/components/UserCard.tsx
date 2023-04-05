import Link from "next/link";
import React from "react";

type Props = {
    user: UserType;
};

export default function UserCard({ user }: Props) {
    return (
        <Link href={`users/${user.id}`}>
            <div className="bg-white p-4 rounded-xl">{user.name}</div>
        </Link>
    );
}
