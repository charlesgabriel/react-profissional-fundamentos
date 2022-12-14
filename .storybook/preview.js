import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { select, SelectTypeKnob } from "@storybook/addon-knobs";

import GlobalStyle from "../src/styles/GlobalStyle";
import ThemeProvider, { ThemeNames } from "../src/styles/ThemeProvider";

const viewports = {
  extraSmall: {
    name: "Portrait phone (default)",
    styles: {
      width: "360px",
      height: "640px",
    },
  },
  small: {
    name: "Landscap phone (sm)",
    styles: {
      width: "640px",
      height: "360px",
    },
  },
  medium: {
    name: "Tablet (md)",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  large: {
    name: "Desktop (lg)",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },
  extraLarg: {
    name: "Large Desktop (xl)",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
};

addDecorator((storyFn) => (
  <>
    <ThemeProvider theme={select("Theme", ThemeNames, ThemeNames.light)}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  </>
));

addParameters({
  viewport: {
    viewports,
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
