import React from "react";
import Nav from "./Nav";

export default function Layout({ pageTitle, children, homeDestination }) {
  return (
    <div class="min-h-screen flex flex-col justify-start w-screen p-8 md:px-16 lg:px-24 pb-10 transition duration-500">
      <Nav />
      <div className="py-8">
        <main>{children}</main>
      </div>
    </div>
  );
}
