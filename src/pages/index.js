import { graphql } from "gatsby";
import * as React from "react";
import Home from "./home";
import { useState, useEffect } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { Link } from "gatsby";
import Nav from "../components/Nav";
import Seo from "../components/seo";

export default function IndexPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const x = useMotionValue(0);
  // const height = window.innerHeight;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  setTimeout(() => {
    if (progress >= 100) return;
    setProgress(progress + 1);
    x.set(progress);
  }, 40);

  return (
    <>
      {/* //loading animation with rotating head, enable to show the animation */}
      {/* <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loading bg-black z-50 flex items-center justify-center fixed w-screen h-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, duration: 3, ease: "easeIn" }}
          >
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              exit={{ opacity: 0, ease: "easeIn" }}
              className="text-sm lg:text-2xl font-medium"
            >{`${progress}%`}</motion.h4>
          </motion.div>
        )}
      </AnimatePresence> */}
      <Home />
    </>
  );
}
