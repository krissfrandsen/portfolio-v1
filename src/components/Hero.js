import React from "react";
import { Link } from "gatsby";
import socialLinks from "../constants/social_links";
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <header className="hero">
      {/* <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"> </div>
            <h1>I'm Kriss</h1>
            <h4>frontend developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <div className="social-links">
              {socialLinks.map((link) => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </article>
      </section> */}
    </header>
  );
};

export default Hero;
