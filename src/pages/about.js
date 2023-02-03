import React from "react";
import profile from "../assets/Profile.png";
import profile2 from "../assets/DSC_3880-3.jpg";
import Layout from "../components/layout";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Seo from "../components/seo";

export default function About() {
  return (
    <>
      <Layout>
        <div className="pt-16 w-full flex flex-col lg:flex-row items-start justify-between max-w-screen-2xl m-auto lg:pb-16">
          <h1 className="text-3xl font-bold leading-relaxed w-1/2 pb-8">
            Designer & Developer
          </h1>
          <div className="w-full md:w-5/6 lg:w-1/2">
            <p className="text-2xl leading-relaxed">
              As a Product Designer & Frontend Developer based in New York City,
              I am dedicated to crafting interactive, practical, and enjoyable
              user experiences. I recently graduated from General Assembly and
              honed my design skills through self-education, including reading
              blogs, taking online classes, and applying my knowledge to both
              personal and professional projects.
            </p>
            <div className="py-8">
              <button className="mt-3 px-4 pt-1.5 pb-2 border border-white rounded-full">
                résumé
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center items-start max-w-screen-2xl m-auto">
          <div className="w-full lg:w-1/2 flex flex-col gap-8 md:pr-12 py-12 md:py-20 lg:py-0">
            <img
              src={profile2}
              alt="profile"
              className="w-[90vw] md:w-5/6 md:h-[28rem] object-cover rounded-3xl  max-h-96"
            />
          </div>
          <div className="w-full md:w-5/6 lg:w-1/2 flex flex-col gap-6 leading-relax">
            <p>
              <span className="font-bold">1. I am a hasdkls</span>, Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Proin fringilla nibh
              quis nisi pulvinar, ac tempor sapien iaculis. Praesent non dictum
              quam. Donec eget risus euismod, placerat risus eu, faucibus dolor.
              Sed auctor molestie ex, eu blandit sem tincidunt in.{" "}
            </p>
            <p>
              <span className="font-bold">2. I am a dhsbjukdlbfs</span>, Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla
              nibh quis nisi pulvinar, ac tempor sapien iaculis. Praesent non
              dictum quam. Donec eget risus euismod, placerat risus eu, faucibus
              dolor. Sed auctor molestie ex, eu blandit sem tincidunt in.
            </p>
            <p>
              <span className="font-bold">3. I am a hasdnjuiklsd</span>Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla
              nibh quis nisi pulvinar, ac tempor sapien iaculis. Praesent non
              dictum quam. Donec eget risus euismod, placerat risus eu, faucibus
              dolor. Sed auctor molestie ex, eu blandit sem tincidunt in.{" "}
            </p>
            <p>
              <span className="font-bold">4. I am a nasdjuiklfs</span> Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla
              nibh quis nisi pulvinar, ac tempor sapien iaculis. Praesent non
              dictum quam. Donec eget risus euismod, placerat risus eu, faucibus
              dolor. Sed auctor molestie ex, eu blandit sem tincidunt in.
            </p>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
}

export const Head = () => (
  <>
    <title>Yusong Shi | About</title>
    <meta name="About" content="Yusong Shi About" />
    <Seo title="About Me: Yusong Shi" />
  </>
);
