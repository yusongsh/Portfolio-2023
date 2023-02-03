import React from "react";
import Layout from "../../components/layout";
import { useState, useEffect } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import Nav from "../../components/Nav";
import Seo from "../../components/seo";

export default function Bike() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loading bg-black z-50 flex items-center justify-center fixed w-screen h-screen"
            initial={{ opacity: 0, x: "20vw" }}
            animate={{ opacity: 1, x: "0" }}
            exit={{
              opacity: 0.5,
              x: "-100vw",
              duration: 4000,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}
          >
            <motion.h4 className="text-sm lg:text-2xl font-medium ">
              Bike NYC
            </motion.h4>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <div className="p-8 md:px-16 lg:px-24 pb-10 transition duration-500 h-full min-h-screen flex flex-col"> */}
      <Layout>
        <h1>Bike NYC</h1>
      </Layout>
      {/* </div> */}
    </>
  );
}

export const Head = () => (
  <>
    <title>Yusong Shi | Work | Bike NYC</title>
    <meta name="Work | Bike NYC" content="Yusong Shi's work" />
    <Seo title="Yusong's work - Bike NYC" />
  </>
);
