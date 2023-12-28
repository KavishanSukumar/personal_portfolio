import React from "react";
import "./projects.css";
import RideNSave from "../../assets/uber.png";
import entero from "../../assets/entero.png";
import blog from "../../assets/blog.jpg";
import con360 from "../../assets/con360.png";
import newsapp from "../../assets/newapp.png";
import Nocturne from "../../assets/Nocturne.png";
const data = [
  {
    id: 1,
    title: "Nocturne",
    image: Nocturne,
    description:
      "An ongoing research project on providing real-time driving assistance at night in the Sri Lankan context.",
    github: null,
  },
  {
    id: 2,
    title: "Entero(Event Management System)",
    image: entero,
    description:
      "An Event Management System where a customer can find Service Providers through the system for the events and book the services through the system.",
    github: "https://github.com/KavishanSukumar/Entero",
  },
  {
    id: 3,
    title: "Construct360(Contruction Management System)",
    image: con360,
    description:
      "A platform where a customer can find a good constructor and manage the construction-related documents and oversee their construction process.",
    github: "https://github.com/KavishanSukumar/Construct360deg",
  },
  {
    id: 4,
    title: "Blog",
    image: blog,
    description:
      "A general blog web application where users can veiw blogs and users with an account can write blog and upload with an image.",
    github: "https://github.com/KavishanSukumar/MERN-Blog",
  },

  {
    id: 5,
    title: "News App",
    image: newsapp,
    description:
      "An new reading app where users can read news from different sources and can search for news. With the integration of Alan AI, users can ask for news and the app will read the news.",
    github: "https://github.com/KavishanSukumar/News-Reading-App",
  },
  {
    id: 6,
    title: "RideNSave",
    image: RideNSave,
    description:
      "An Uber App clone using Google Map API where an user can select the pickup location and drop location and see the route and the cost for the ride.",
    github: "https://github.com/KavishanSukumar/Uber-Clone-React-Native",
  },
];
export const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        {data.map(({ id, title, image, description, github }) => {
          return (
            <article key={id} className="project__item">
              <div className="project__item-image">
                <img src={image} alt="Uber clone" srcset="" />
              </div>
              <h3>{title}</h3>
              <small className="text-light">{description}</small>
              <div className="project__item-cta">
                {github != null ? (
                  <a href={github} className="btn btn-primary" target="_blank">
                    Github
                  </a>
                ) : (
                  <span className="btn btn-disabled">Github</span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
