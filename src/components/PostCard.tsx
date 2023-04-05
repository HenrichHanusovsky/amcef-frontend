import React from "react";

type Props = {
    post: PostType;
};

export default function PostCard({ post }: Props) {
    return (
        <div className="p-4 bg-white rounded-xl">
            <h3 className="font-bold">{post.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{post.body}</p>
        </div>
    );
}
