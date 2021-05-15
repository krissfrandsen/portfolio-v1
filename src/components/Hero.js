import React from "react";
import { Link } from "gatsby";

const Hero = () => {
  return (
    <section className="hero">
      <h2>Hello</h2>
      <div className="hero__name">
        <h1 className="hero__name-thin">I am </h1>
        <h1>Kriss Frandsen</h1>
      </div>
      <div className="subtitle hero__subtitle">
        <div className="subtitle__underline hero__subtitle__underline"></div>
        <h4>Frontend Developer</h4>
        <div className="subtitle__underline hero__subtitle__underline"></div>
      </div>

      <Link to="/contact" className="button">
        contact me
      </Link>
    </section>
  );
};

export default Hero;
