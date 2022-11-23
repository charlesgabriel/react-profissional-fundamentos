import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import bgHighwayImage from "stories/assets/bg-highway.jpg";
import bgCarImage from "stories/assets/bg-car.jpg";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

export default {
  title: "Components/Molecules/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={bgHighwayImage}>
    <h1>{text("Title", "Ganhe sua liberdade para ir e vir")}</h1>
    <p>{text("Text", "A auto escola lider em aprovação.")}</p>
  </Hero>
);

export const withList = () => (
  <Hero image={bgCarImage}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong>
        <br /> para ir e vir
      </h1>
    </Heading>
    <ul>
      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Earum, similique labore.</li>
      <li>
        Sapiente fugiat sit nisi obcaecati quos labore explicabo, voluptatum
        eaque, tempora quam dolore adipisci ad aut exercitationem tempore
        pariatur.
      </li>
    </ul>
    <Button color="primary" variant="outlined">
      Matricule-se agora
    </Button>
  </Hero>
);
