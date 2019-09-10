import React from "react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import Typography from "./";
import { NASA_DARK } from '../../tokens';

const commonStyles = { padding: "2rem", display: 'flex', flexDirection: 'column' };
const DarkBackground = ({ children }) => <div style={{ background: NASA_DARK, ...commonStyles }}>{children}</div>;

/**
 * Docs page configuration
 */
export default {
  title: 'Typography',
  component: Typography,
  parameters: {
    componentSubtitle: 'Come up with something better',
  },
};

const content = "abcdefghijklmnopqrstuvwxyz"

/**
 * Component stories
 */
export const overview = () => (
  <div>
    <Typography tag="h2">abcdefghijklmnopqrstuvwxyz</Typography>
    <Typography tag="h2" weight="medium">abcdefghijklmnopqrstuvwxyz</Typography>
    <Typography tag="h2" weight="medium" theme="light">abcdefghijklmnopqrstuvwxyz</Typography>
    <Typography tag="h2" size="xl" weight="medium">abcdefghijklmnopqrstuvwxyz</Typography>
    <Typography tag="h2" size="sm" weight="medium">abcdefghijklmnopqrstuvwxyz</Typography>
    </div>
);
