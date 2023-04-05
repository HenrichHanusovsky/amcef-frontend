import useFetch from "@/hooks/useFetch";
import React, { use, useEffect, useState } from "react";
import UserCard from "./UserCard";

type Props = {};

export default function UserList({}: Props) {
    const { data, error, loading } = useFetch("https://jsonplaceholder.typicode.com/users");
    return (
        <>
            <h1 className="mb-2">Users</h1>
            <div className="flex flex-col gap-2">
                {data && data.map((user: UserType) => <UserCard key={user.id} user={user} />)}
            </div>
        </>
    );
}
