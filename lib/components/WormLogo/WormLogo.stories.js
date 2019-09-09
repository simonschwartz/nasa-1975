import React from "react";
import WormLogo from ".";
import { NASA_RED, NASA_BLACK, NASA_WHITE, NASA_GREY } from '../Colors/';

const commonStyles = { padding: "2rem", display: 'flex', flexDirection: 'column' };
const DarkBackground = ({ children }) => <div style={{ background: NASA_BLACK, ...commonStyles }}>{children}</div>;
const LightBackground = ({ children }) => <div style={{ background: "#DDDDDD", ...commonStyles }}>{children}</div>;
const WhiteBackground = ({ children }) => <div style={{ background: NASA_WHITE, ...commonStyles }}>{children}</div>;
const MediumBackground = ({ children }) => <div style={{ background: NASA_GREY, ...commonStyles }}>{children}</div>;

/**
 * Docs page configuration
 */
export default {
  title: 'Worm Logo',
  component: WormLogo,
  parameters: {
    componentSubtitle: 'The NASA Logotype',
  },
};

/**
 * Component stories
 */
export const overview = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <WormLogo style={{ maxWidth: '30rem', marginBottom: '2rem' }} />
    <WormLogo style={{ maxWidth: '20rem', marginBottom: '2rem' }} />
    <WormLogo style={{ maxWidth: '12rem' }} />
  </div>
);

export const onWhiteBackground = () => (
  <WhiteBackground>
    <WormLogo color={NASA_BLACK} style={{ maxWidth: '20rem', marginBottom: '2rem' }} />
    <WormLogo color={NASA_RED} style={{ maxWidth: '20rem' }} />
  </WhiteBackground>
);

export const onLightBackground = () => (
  <LightBackground>
    <WormLogo color={NASA_BLACK} style={{ maxWidth: '20rem' }} />
  </LightBackground>
);

export const onDarkBackground = () => (
  <DarkBackground>
    <WormLogo color={NASA_WHITE} style={{ maxWidth: '20rem' }} />
  </DarkBackground>
);

export const onMediumBackground = () => (
  <MediumBackground>
    <WormLogo color={NASA_BLACK} style={{ maxWidth: '20rem', marginBottom: '2rem' }} />
    <WormLogo color={NASA_WHITE} style={{ maxWidth: '20rem' }} />
  </MediumBackground>
);
