import React from "react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import LogoType from "./";
import { NASA_DARK } from '../../tokens';

const commonStyles = { padding: "2rem", display: 'flex', flexDirection: 'column' };
const DarkBackground = ({ children }) => <div style={{ background: NASA_DARK, ...commonStyles }}>{children}</div>;

/**
 * Docs page configuration
 */
export default {
  title: 'Logo Type',
  component: LogoType,
  parameters: {
    componentSubtitle: 'Come up with something better',
  },
};

/**
 * Component stories
 */
export const overview = () => (
  <LogoType />
);

export const darkTheme = () => (
  <LogoType theme="dark" />
);

export const lightTheme = () => (
  <DarkBackground>
    <LogoType theme="light" />
  </DarkBackground>
);

export const redTheme = () => (
  <LogoType theme="red" />
);

export const withCenterName = () => (
  <LogoType theme="dark" centerName="John F. Kennedy Space Center" />
);

export const withStackedName = () => (
  <LogoType theme="dark" stacked />
);

export const sizes = () => (
  <div>
    <LogoType theme="dark" size="lg" style={{ marginBottom: "2rem" }} />
    <LogoType theme="dark" size="md" style={{ marginBottom: "2rem" }} />
    <LogoType theme="dark" size="sm" />
  </div>
);

