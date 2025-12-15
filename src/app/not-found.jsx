import Link from "next/link";
import React from "react";

export default function NotFoundPage404() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="py-4">404 page not found</h1>
        <Link href={"/"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to home
          </button>
        </Link>
      </div>
    </div>
  );
}
