import React from "react";
import Nav from "./Nav";

export default function Layout({ pageTitle, children, homeDestination }) {
  return (
    <div className="px-4 md:px-12 lg:px-24 pb-6 transition duration-500 h-full min-h-screen w-full flex flex-col">
      <main>{children}</main>
    </div>
  );
}
