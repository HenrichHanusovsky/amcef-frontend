import useFetch from "@/hooks/useFetch";
import React, { use } from "react";
import PostCard from "./PostCard";

type Props = {
    userId: string;
};

export default function PostsList({ userId }: Props) {
    const { data, error, loading } = useFetch(`http://localhost:8080/posts/user/${userId}`);

    console.log(data);
    console.log(error);

    const getPosts = () => {
        if (loading) {
            return <p className="text-center text-sm italic text-gray-600">Loading...</p>;
        }
        if (error || !data) {
            return <p className="text-center text-sm italic text-red-600">Could not fetch data</p>;
        }
        if (!data.length) {
            return <p className="text-center text-sm italic text-gray-600">No posts yet</p>;
        }
        return <>{data && data.map((post: PostType) => <PostCard key={post.id} post={post} />)}</>;
    };

    return (
        <div className="rounded-xl bg-gray-200 p-4">
            <h2 className="mb-2">Posts</h2>
            <div className="flex flex-col gap-2 items-stretch">{getPosts()}</div>
        </div>
    );
}
