import React from "react";
import { useState, useEffect } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { Link } from "gatsby";
import Nav from "../components/Nav";
import Seo from "../components/seo";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeIn", duration: 1 }}
      class="min-h-screen flex items-center justify-center w-full "
    >
      <div class="fixed w-full max-w-lg">
        <div class="absolute top-0 -left-4 w-52 h-52 bg-purple-400 rounded-full mix-blend-lighten filter blur-3xl opacity-70 animate-blob"></div>
        <div class="absolute top-0 -right-4 w-52 h-52 bg-yellow-400 rounded-full mix-blend-lighten filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-52 h-52 bg-blue-400 rounded-full mix-blend-lighten filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="p-8 md:px-16 lg:px-24 pb-10 transition duration-500 h-full min-h-screen flex flex-col">
        <Nav />
        <div className="flex flex-col justify-center m-auto w-3/5 h-full mix-blend-overlay">
          <h1 className="text-3xl font-medium leading-relaxed">
            {" "}
            Hello, world! I’m Yusong Shi, a product designer & frontend
            developer. I enjoy crafting interactive web applications and
            experimenting with new technology to convey stories.
          </h1>
          <Link to="/about">
            <motion.div
              className="flex flex-row items-center gap-8 mt-12 text-white"
              whileHover={{ x: 10 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
              <motion.p whileHover={{ x: 15 }} className="font-medium text-lg">
                more about me
              </motion.p>
            </motion.div>
          </Link>
        </div>
        <div className="underline text-white flex justify-between pb-8">
          <div></div>
          <button>résumé</button>
        </div>
      </div>
    </motion.div>
  );
}

export const Head = () => (
  <>
    <title>Yusong Shi | Home</title>
    <meta name="Home" content="Yusong Shi Homepage" />
    <Seo title="Yusong Shi Homepage" />
  </>
);
