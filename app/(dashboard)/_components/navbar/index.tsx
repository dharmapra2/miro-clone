import { UserButton } from "@clerk/nextjs";
import React from "react";
import { SearchInput } from "../../search-input";

export default function NavBar() {
  return (
    <nav className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <UserButton />
    </nav>
  );
}
