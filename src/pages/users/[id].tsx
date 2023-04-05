import FormInput from "@/components/FormInput";
import FormLabel from "@/components/FormLabel";
import PostList from "@/components/PostList";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

export default function User() {
    const titleRef = useRef<HTMLInputElement>(null);
    const bodyRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const { id } = router.query;

    const { data, error, loading } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`, !!id);

    const detailsBlock = () => {
        if (loading) {
            return <p>Loading...</p>;
        }
        if (error) {
            return <p className="text-center text-sm italic text-red-600">Could not fetch data</p>;
        }
        return (
            <div>
                <h1 className="text-xl font-bold">{data.name}</h1>
                <p className="text-sm">{data.email}</p>
            </div>
        );
    };

    const handleSubmit = () => {
        if (!id) return;
        const title = titleRef.current?.value;
        const body = bodyRef.current?.value;
        const payload = {
            userId: id,
            title: title,
            body: body,
        };
        fetch(`http://localhost:8080/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
            .then((res) => res.json())
            .then((data) => {});
    };

    return (
        <>
            <div className="p-4 mb-4 bg-white rounded-xl">{detailsBlock()}</div>
            <div className="p-4 mb-4 bg-white rounded-xl">
                <h2 className="font-bold mb-4 ">Add new post</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div>
                        <FormLabel htmlFor="title" label="Title" />
                        <FormInput ref={titleRef} name="title" />
                    </div>
                    <div>
                        <FormLabel htmlFor="body" label="Body" />
                        <FormInput ref={bodyRef} name="body" />
                    </div>
                    <input
                        type="submit"
                        className="self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-min px-5 py-2.5 text-center"
                        value="Post"
                    />
                </form>
            </div>
            {id && <PostList userId={id} />}
        </>
    );
}
