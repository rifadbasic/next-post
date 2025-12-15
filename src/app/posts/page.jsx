import Link from "next/link";
import React from "react";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div>
      <div className="text-center">
        <p className="p-4 bg-violet-500 rounded">All Post</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {posts.map((post) => {
          return (
            <div key={post.id} className="py-4 mx-auto">
              <div className="  gap-4">
                <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                  <h2 className="text-xl font-semibold leading-tight tracking-wide">
                    {post.title}
                  </h2>
                  <p className="flex-1 dark:text-gray-600">{post.body}</p>
                  <div className="flex items-center justify-end gap-6 mt-6 sm:flex-row">
                    <Link
                      href={`/posts/${post.id}`}
                      className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
