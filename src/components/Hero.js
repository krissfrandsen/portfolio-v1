import React from "react";
import { Link } from "gatsby";
import socialLinks from "../constants/social_links";

const Hero = () => {
  return (
    <section className="hero">
      <h2>Hello</h2>
      <div className="hero__name">
        <h1 className="hero__name-thin">I am </h1>
        <h1>Kriss Frandsen</h1>
      </div>
      <div className="hero__title">
        <div className="underline"></div>
        <h4>Frontend Developer</h4>
        <div className="underline"></div>
      </div>

      <Link to="/contact" className="button">
        contact me
      </Link>

      <div className="social__links">
        {socialLinks.map((link) => {
          return (
            <a href={link.url} key={link.id} className="social__links-item">
              {link.icon}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
