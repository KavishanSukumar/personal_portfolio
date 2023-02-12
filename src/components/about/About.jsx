import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { SiFuturelearn } from "react-icons/si";
function About() {
  return (
    <section id="about">
      <h5>Get&nbsp;To&nbsp;Know</h5>
      <h2>About&nbsp;Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GoBook className="about__icon" />
              <h5>Education</h5>
              <small>College degree and other</small>
            </article>
            <article className="about__card">
              <GiSkills className="about__icon" />
              <h5>Experience</h5>
              <small>6 month Working</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Achievements</h5>
              <small>Competition and other Achievements</small>
            </article>
            <article className="about__card">
              <SiFuturelearn className="about__icon" />
              <h5>Certifications</h5>
              <small>Online Certification</small>
            </article>
          </div>
          <p>
            A flexible & enthusiastic computer science undergraduate, successful
            at managing multiple priorities with a positive attitude and willing
            to contribute his maximum effort to the organization while learning
            new technologies. A team player with good social skills and also
            likes to connect with industry individuals to gain valuable
            experience in Professional IT environments.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's&nbsp;Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
