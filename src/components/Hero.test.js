import React from "react";
import { render } from "@testing-library/react";
import Hero from "./Hero";

test("render Hero with children", () => {
  const { getByText } = render(
    <Hero>
      <p>Charles Gabriel</p>
    </Hero>
  );

  expect(getByText("Charles Gabriel")).toBeInTheDocument();
});
