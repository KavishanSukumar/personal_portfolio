import React from "react";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import About from "../../components/about/About";
import Experience from "../../components/experience/Experience";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import { Projects } from "../../components/projects/Projects";

export default function Portfolio() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
