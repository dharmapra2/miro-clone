"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchInput = () => {
  return (
    <div className="w-full relative">
      <Search  className="absolute top-1/2"/>
      <Input />
    </div>
  );
};
