import React from "react";

export default function Footer() {
  return (
    <>
      <div className="mt-32 h-[0.075rem] w-full bg-white"></div>
      <div className="pt-8 flex flex-col-reverse lg:flex-row items-start justify-between">
        <div className="flex flex-col justify-between">
          <h3 className="text-2xl font-bold">
            Don’t be a stranger. Let’s connect.
          </h3>
          <p className="text-sm py-4">© 2023 Yusong Shi</p>
        </div>
        <div className="flex flex-row gap-8 pb-8 lg:pb-0">
          <a
            href="mailto:jackshi.sys@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 md:hover:line-through decoration-maingrey"
          >
            Email
          </a>

          <a
            href="https://github.com/yusongsh"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 md:hover:line-through decoration-maingrey"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/yusongshi/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 md:hover:line-through decoration-maingrey"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/iackyshi/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 md:hover:line-through decoration-maingrey"
          >
            Instagram
          </a>
        </div>
      </div>
    </>
  );
}
