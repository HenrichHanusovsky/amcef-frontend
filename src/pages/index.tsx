import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Posts from "@/components/PostList";
import UserList from "@/components/UserList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="p-4 bg-gray-200 rounded-xl">
            <UserList />
        </div>
    );
}
