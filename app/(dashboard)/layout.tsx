import React from "react";
import SideBar from "./_components/sidebar";
import OrganizationSideBar from "./_components/org-sidebar";
import NavBar from "./_components/navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full">
      <SideBar />
      <section className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrganizationSideBar />
          <div className="h-full flex-1">
            <NavBar />
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}
