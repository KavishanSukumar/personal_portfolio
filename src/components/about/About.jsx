import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { SiFuturelearn } from "react-icons/si";

import EducationModel from "./EducationModel";
import ExperienceModel from "./ExperienceModel";
import AchievementsModel from "./AchievementsModel";
import CertificationsModel from "./CertificationsModel";

function About() {
  const educationmodelRef = React.useRef();
  const experiencemodelRef = React.useRef();
  const achievementsmodelRef = React.useRef();
  const certificationsmodelRef = React.useRef();

  const OpenModelEducation = () => {
    educationmodelRef.current.OpenModelEducation();
  };
  const OpenModelExperience = () => {
    experiencemodelRef.current.OpenModelExperience();
  };
  const OpenModelAchievements = () => {
    achievementsmodelRef.current.OpenModelAchievements();
  };
  const OpenModelCertifications = () => {
    certificationsmodelRef.current.OpenModelCertifications();
  };

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
            <article className="about__card" onClick={OpenModelEducation}>
              <GoBook className="about__icon" />
              <h5>Education</h5>
              <small>College degree and other</small>
            </article>
            <EducationModel ref={educationmodelRef} />
            <article className="about__card" onClick={OpenModelExperience}>
              <GiSkills className="about__icon" />
              <h5>Experience</h5>
              <small>6 month Working</small>
            </article>
            <ExperienceModel ref={experiencemodelRef} />
            <article className="about__card" onClick={OpenModelAchievements}>
              <FaAward className="about__icon" />
              <h5>Extra Curricular Activities</h5>
              <small>Activities other than Acadamics</small>
            </article>
            <AchievementsModel ref={achievementsmodelRef} />
            <article className="about__card" onClick={OpenModelCertifications}>
              <SiFuturelearn className="about__icon" />
              <h5>Certifications</h5>
              <small>Online Certification</small>
            </article>
            <CertificationsModel ref={certificationsmodelRef} />
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
