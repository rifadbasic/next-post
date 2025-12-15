"use client";

import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MealInpute() {
  const [search, setSerch] = useState("");
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
   const searchQueary = {search};
   const urlQueryParams = new URLSearchParams(searchQueary);
   router.push(`${pathName}?${urlQueryParams}`);
  }, [search]);

  return (
    <div>
      <div className="my-12 flex justify-center items-center text-center">
        <input
          className="bg-stone-50 text-black px-2 mr-4"
          type="text"
          value={search}
          onChange={(e) => setSerch(e.target.value)}
          placeholder="Search"
        />
      </div>
    </div>
  );
}
