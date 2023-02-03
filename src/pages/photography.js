import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Playground() {
  return (
    <Layout>
      <div>
        <h1 className="text-2xl flex items-center justify-center m-auto">
          Page coming soon
        </h1>
      </div>
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>Yusong Shi | Photography</title>
    <meta name="Photography" content="Yusong Shi Photography" />
    <Seo title="Yusong's Photogtaphy" />
  </>
);
