import React from "react";
import profileDark from "../assets/profile-dark.png";
import profileLight from "../assets/Profile_light.png";
import { Link } from "gatsby";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const handleMenuOpen = () => {
    setOpen(true);
  };
  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <div className="py-8 flex flex-row justify-between items-center h-full w-full ">
      <div>
        <Link to="/home">
          <img
            src={profileDark}
            alt="profile"
            className="w-10 h-10 shadow-md rounded-full "
          />
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <div>
          <div onClick={handleMenuOpen} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="48"
              height="48"
              className="fill-mainbg/0 stroke-white stroke-2"
            >
              <title>Menu</title>
              <circle
                cx="12"
                cy="12"
                r="2"
                opacity="1"
                transform-origin="0px 0px"
              ></circle>
              <circle
                cx="24"
                cy="12"
                r="2"
                opacity="1"
                transform-origin="0px 0px"
              ></circle>
              <circle
                cx="36"
                cy="12"
                r="2"
                opacity="1"
                transform-origin="0px 0px"
              ></circle>
              <circle
                cx="36"
                cy="24"
                r="2"
                opacity="1"
                transform-origin="0px 0px"
              ></circle>
              <circle
                cx="36"
                cy="36"
                r="2"
                opacity="1"
                transform-origin="0px 0px"
              ></circle>
              <circle
                cx="24"
                cy="36"
                r="2"
                opacity="1"
                transform-origin="0px 0px"
              ></circle>
              <circle
                cx="12"
                cy="36"
                r="2"
                opacity="1"
                transform-origin="0px 0px"
              ></circle>
              <circle
                cx="12"
                cy="24"
                r="2"
                opacity="1"
                transform-origin="0px 0px"
              ></circle>
              <circle
                cx="24"
                cy="24"
                r="2"
                opacity="1"
                transform-origin="0px 0px"
              ></circle>
            </svg>
          </div>

          <nav
            className={
              open
                ? "bg-darkgrey bg-[url('../assets/stars_black.svg')] text-mainbg fixed right-0 top-0 w-full min-h-screen flex flex-col md:justify-between p-8 md:px-16 lg:px-24 pb-10 z-30 transition ease-in-out duration-500 delay-500"
                : "hidden"
            }
          >
            <div className="py-8 flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-8 uppercase font-semibold">
                <Link to="/home">
                  <img
                    src={profileLight}
                    alt="profile"
                    className="w-10 h-10 shadow-md rounded-full"
                  />
                </Link>
                {/* <p className="text-mainbg">Yusong Shi</p> */}
                <motion.p
                  initial={{ opacity: 0, y: -60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeIn", duration: 1 }}
                  className="text-mainbg"
                >
                  Yusong Shi
                </motion.p>
              </div>
              <div className="flex flex-row items-center">
                <div onClick={handleMenuClose} className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48"
                    height="48"
                    className="fill-mainbg/0 stroke-mainbg stroke-2"
                  >
                    <title>Menu</title>
                    <circle
                      cx="12"
                      cy="12"
                      r="2"
                      opacity="1"
                      transform-origin="0px 0px"
                    ></circle>
                    <circle
                      cx="30"
                      cy="18"
                      r="2"
                      opacity="1"
                      transform-origin="0px 0px"
                    ></circle>
                    <circle
                      cx="36"
                      cy="12"
                      r="2"
                      opacity="1"
                      transform-origin="0px 0px"
                    ></circle>
                    <circle
                      cx="30"
                      cy="30"
                      r="2"
                      opacity="1"
                      transform-origin="0px 0px"
                    ></circle>
                    <circle
                      cx="36"
                      cy="36"
                      r="2"
                      opacity="1"
                      transform-origin="0px 0px"
                    ></circle>
                    <circle
                      cx="18"
                      cy="30"
                      r="2"
                      opacity="1"
                      transform-origin="0px 0px"
                    ></circle>
                    <circle
                      cx="12"
                      cy="36"
                      r="2"
                      opacity="1"
                      transform-origin="0px 0px"
                    ></circle>
                    <circle
                      cx="18"
                      cy="18"
                      r="2"
                      opacity="1"
                      transform-origin="0px 0px"
                    ></circle>
                    <circle
                      cx="24"
                      cy="24"
                      r="2"
                      opacity="1"
                      transform-origin="0px 0px"
                    ></circle>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end w-full">
              <div className="flex flex-col py-20 md:py-12 md:pt-0 items-end text-5xl gap-8 mb-16 ">
                <Link
                  onClick={handleMenuClose}
                  to="/work"
                  className="hover:line-through decoration-maingrey decoration-3"
                >
                  work
                </Link>
                <Link
                  onClick={handleMenuClose}
                  to="/about"
                  className="hover:line-through decoration-maingrey decoration-3"
                >
                  about
                </Link>
                <Link
                  onClick={handleMenuClose}
                  to="/playground"
                  className="hover:line-through decoration-maingrey decoration-3"
                >
                  playground
                </Link>
                <Link
                  onClick={handleMenuClose}
                  to="/photography"
                  className="hover:line-through decoration-maingrey decoration-3"
                >
                  photography
                </Link>
              </div>
              <div className="hidden md:flex flex-row justify-between items-end pb-8 w-full">
                <div className="flex w-1/3 lg:w-1/4">
                  <p className="text-sm">
                    The world of digital design and web development has grown at
                    an extremely rapid rate over the last 10 years and my aim
                    has been to evolve with it. I’m learning and gaining new
                    skills every day.
                  </p>
                </div>
                <div className="flex flex-row gap-8 lowercase">
                  <a
                    href="mailto:jackshi.sys@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="md:hover:line-through decoration-maingrey"
                  >
                    email
                  </a>

                  <a
                    href="https://github.com/yusongsh"
                    target="_blank"
                    rel="noreferrer"
                    className="md:hover:line-through decoration-maingrey"
                  >
                    github
                  </a>

                  <a
                    href="https://www.linkedin.com/in/yusongshi/"
                    target="_blank"
                    rel="noreferrer"
                    className="md:hover:line-through decoration-maingrey"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://dribbble.com/yusongshi"
                    target="_blank"
                    rel="noreferrer"
                    className="md:hover:line-through decoration-maingrey"
                  >
                    dribbble
                  </a>
                </div>
              </div>

              <div></div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
