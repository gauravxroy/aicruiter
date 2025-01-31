import React from "react";
import Navbar from "./_components/Navbar";

function DashboardLayout({ children }) {
  return (
    <div>
      <Navbar className="" />
      <main className="mx-5 md:mx-20 lg:mx-36 "> {children}</main>
    </div>
  );
}

export default DashboardLayout;
