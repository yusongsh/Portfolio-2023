import { graphql } from "gatsby";
import * as React from "react";
import { useState, useEffect } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import loadingGif from "../assets/profile-dark.png";
import { Link } from "gatsby";
import Nav from "../components/Nav";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Playground() {
  return (
    <>
      <Layout>
        <h1>Playground</h1>
      </Layout>
    </>
  );
}

export const Head = () => (
  <>
    <title>Yusong Shi | Playground</title>
    <meta name="Playground" content="Yusong Shi's Playground" />
    <Seo title="Yusong's Playground" />
  </>
);
