import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <>
      <main>
        <Hero />
        <AboutMe />
      </main>
    </>
  );
};

export default IndexPage;
