"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export const OrganizationSideBar = () => {
  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
      <div className="flex items-center gap-x-2 cursor-pointer">
        <Image src="/logo.svg" alt="Logo" height={60} width={60} />
        <span className={cn("font-semibold text-2xl", font.className)}>
          Board
        </span>
      </div>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
          },
        }}
      />
      <div className="space-y-1 w-full">
        <Button
          variant="ghost"
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full cursor-pointer"
        >
          <div className="">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Team borads
          </div>
        </Button>
      </div>
    </div>
  );
};
