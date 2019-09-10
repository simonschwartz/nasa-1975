import React from "react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import StemLogo from "./";

/**
 * Docs page configuration
 */
export default {
  title: 'Stem Logo',
  component: StemLogo,
  parameters: {
    componentSubtitle: 'Come up with something better',
  },
};

/**
 * Component stories
 */
export const overview = () => (
  <StemLogo title="News" />
);

export const dark = () => (
  <StemLogo title="News" theme="dark" />
);

export const red = () => (
  <StemLogo title="News" theme="red" />
);

export const light = () => (
  <StemLogo title="News" theme="light" />
);

export const sizes = () => (
  <div>
    <StemLogo title="News" size="lg" style={{ marginBottom: "2rem" }} />
    <StemLogo title="News" size="md" style={{ marginBottom: "2rem" }} />
    <StemLogo title="News" size="sm" />
  </div>
);