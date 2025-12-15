"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  if (!pathname.includes("dashboard")) {
    return (
      <div className="w-11/12 mx-auto">
        <nav className="flex justify-center">
          <ul className="flex justify-between items-center w-1/2">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/posts">
              <li>Posts</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  } else {
    return <></>;
  }
}
