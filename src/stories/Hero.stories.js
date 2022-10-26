import React from "react";

import Hero from "../components/Hero";
import bgHighwayImage from "./assets/bg-highway.jpg";
import bgCarImage from "./assets/bg-car.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={bgHighwayImage}>
    <h1>Ganhe sua liberdade para ir e vir</h1>
    <p>A auto escola lider em aprovação.</p>
  </Hero>
);

export const withList = () => (
  <Hero image={bgCarImage}>
    <h1>
      Ganhe sua <strong>liberdade</strong>
      <br /> para ir e vir
    </h1>
    <ul>
      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Earum, similique labore.</li>
      <li>
        Sapiente fugiat sit nisi obcaecati quos labore explicabo, voluptatum
        eaque, tempora quam dolore adipisci ad aut exercitationem tempore
        pariatur.
      </li>
    </ul>
    <button>Matricule-se agora</button>
  </Hero>
);
