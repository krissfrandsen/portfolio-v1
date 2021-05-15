import React from "react";
import Title from "./Title";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import socialLinks from "../constants/social_links";
const AboutMe = () => {
  return (
    <section className="section background-grey">
      <Title title="about me" subtitle="who am I"></Title>
      <div className="section__center section__about">
        <div className="section__about__left">
          <StaticImage
            src="../assets/images/aboutMe.png"
            alt="portfolio"
            placeholder="blurred"
          />
        </div>
        <div className="section__about__right">
          <p>
            I'm a fullstack developer with focus on frontend stack. I am
            interested in UI/UX design and responsiveness of a website.{" "}
          </p>
          <p>
            My passion for software development started when I joined a
            fullstack development bootcamp. After the bootcamp I decided this is
            I really want to do as a career. Currently, I am an intern in a
            "start-up" company called Tengai unbiased as a frontend developer.
          </p>
          <Link to="/contact" className="button section__about__right-light">
            contact me
          </Link>
          <Link
            to="https://drive.google.com/file/d/1-elJmSZm-R3xrIWCENabzPJ4zmzLgHDY/view?usp=sharing"
            className="button section__about__right-dark"
          >
            download CV
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
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
