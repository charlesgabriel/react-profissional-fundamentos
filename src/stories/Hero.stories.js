import React from "react";

import Hero from "../components/Hero";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero title="Ganhe sua liberdade para ir e vir">
    <p>A auto escola lider em aprovação.</p>
  </Hero>
);

export const withList = () => (
  <Hero title="Ganhe sua liberdade para ir e vir">
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
