import React from "react";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import ThemeProvider from "styles/ThemeProvider";
import GlobalStyle from "styles/GlobalStyle";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";

import bgCarImage from "stories/assets/bg-car.jpg";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
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
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor fronta">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaKey />} title="Habilitação mais rápida">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
