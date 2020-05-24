import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaShuttleVan, FaHiking, FaBeer } from "react-icons/fa";
export class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle service",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        icon: <FaBeer />,
        title: "Amazing Beer",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
