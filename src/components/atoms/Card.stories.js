import React from "react";

import Card, { CardBody } from "./Card";
import Section from "components/molecules/Section";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

export default {
  title: "Components/Atoms/Card",
  component: Card,
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Titulo</h6>
        </Heading>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div>
          <Button color="primary" variant="link">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);
