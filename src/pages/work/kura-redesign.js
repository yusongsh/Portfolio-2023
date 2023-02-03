import React from "react";
import Layout from "../../components/layout";
import { useState, useEffect } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import Nav from "../../components/Nav";
import Seo from "../../components/seo";

export default function Kura() {
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
              Kura Redesign
            </motion.h4>
          </motion.div>
        )}
      </AnimatePresence>

      <Layout>
        <h1>Kura Redesign</h1>
      </Layout>
    </>
  );
}

export const Head = () => (
  <>
    <title>Yusong Shi | Work | Kura Redesign</title>
    <meta name="Work | Kura Redesign" content="Yusong Shi's work" />
    <Seo title="Yusong's work - Kura Redesign" />
  </>
);
