import React from "react";
import { getPosts } from "../page";
import Link from "next/link";

export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;

  // fetch data
  const SinglePost = await getPosts().then((posts) =>
    posts.find((post) => post.id === Number(id))
  );


  return {
    title: SinglePost.title,
    description: SinglePost.body,
  };
}

export default async function SinglePost({ params }) {
  const { id } = await params;
  const posts = await getPosts();

  const post = posts.find((post) => post.id === Number(id));

  return (
    <div>
      <div className="p-6 rounded bg-slate-500 my-12">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p>{post.body}</p>
      </div>
      <Link
        className="text-center px-4 py-2 rounded bg-blue-700 hover:bg-blue-600"
        href="/posts"
      >
        Back
      </Link>
    </div>
  );
}
