import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Seo from "../components/seo";

export default function Work() {
  return (
    <Layout>
      {/* <motion.div
        initial={{ opacity: 1, y: "0%" }}
        animate={{ opacity: 1, y: "calc(100vh - 400%)" }}
        transition={{ ease: "easeInOut", duration: 2 }}
        className="bg-maingrey bg-[url('../assets/stars_black.svg')] left-0 top-0 w-screen h-screen fixed flex justify-center items-center m-auto"
      >
        <h1 className="text-red-800 font-bold text-5xl">work</h1>
      </motion.div> */}
      <div className="pt-16 w-full flex flex-col lg:flex-row items-start justify-between max-w-screen-2xl m-auto">
        <h1 className="text-3xl font-bold leading-relaxed w-1/2 pb-8">Work</h1>
        <p className="text-2xl leading-relaxed w-full md:w-5/6 lg:w-1/2">
          This is a selection of my most noteworthy and diverse work,
          encompassing various fields including product design, web design, and
          web Development.
        </p>
      </div>
      <div className="mt-64 pb-4 flex flex-row items-center gap-4 max-w-screen-2xl m-auto">
        <button className="underline underline-offset-4 text-sm">
          <Link to="#projects">SCROLL TO DISCOVER</Link>
        </button>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
        </svg>
      </div>
      <div id="projects" className="max-w-screen-2xl m-auto">
        <Projects />
      </div>
      <Footer />
    </Layout>
  );
}

const Projects = () => {
  return (
    <div class="container grid grid-cols-1 lg:grid-cols-2 gap-12 pt-16">
      <div className="w-full aspect-[1/1] bg-red-300">
        <Link to="./bike-nyc">01</Link>
      </div>
      <div className="w-full aspect-[1/1] bg-purple-300">
        <Link to="./kura-redesign">02</Link>
      </div>
      <div className="w-full aspect-[1/1] bg-blue-300">01</div>
      <div className="w-full aspect-[1/1] bg-green-300">09</div>
      <div className="w-full aspect-[1/1] bg-yellow-300">01</div>
      <div className="w-full aspect-[1/1] bg-slate-300">01</div>
    </div>
  );
};

export const Head = () => (
  <>
    <title>Yusong Shi | Work</title>
    <meta name="Work" content="Yusong Shi's Work" />
    <Seo title="Yusong's Work" />
  </>
);
