import React from "react";
import { render, screen } from "test-utils";

import ProductGrid from "./ProductGrid";

const buildProducts = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({ id: i, title: `Title ${i}` });
  }

  return result;
};

test("with 6 products show only 3 items", () => {
  render(<ProductGrid products={buildProducts(6)} />);

  expect(screen.getAllByRole("heading").length).toBe(3);
});
