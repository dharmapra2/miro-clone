import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex items-center gap-x-4 p-5 bg-green-200">
      <div className="hidden lg:flex lg:flex-1 bg-yellow-200">Todo Search</div>
      <UserButton />
    </nav>
  );
}
