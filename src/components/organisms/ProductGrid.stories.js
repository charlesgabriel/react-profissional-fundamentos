import React from "react";

import ProductGrid from "./ProductGrid";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid
    products={[
      { id: 1, title: "Título", summary: "Texto" },
      { id: 2, title: "Título", summary: "Texto" },
      { id: 3, title: "Título", summary: "Texto" },
    ]}
  />
);
