

import React from "react";
import { storiesOf } from "@storybook/react";
import WormLogo from "../lib/components/WormLogo/";
import { NASA_RED, NASA_BLACK, NASA_WHITE, NASA_GREY } from '../lib/components/Colors/';

const commonStyles = { padding: "3rem" };
const DarkBackground = ({ children }) => <div style={{ background: NASA_BLACK, ...commonStyles }}>{children}</div>;
const LightBackground = ({ children }) => <div style={{ background: "#DDDDDD", ...commonStyles }}>{children}</div>;
const WhiteBackground = ({ children }) => <div style={{ background: NASA_WHITE, ...commonStyles }}>{children}</div>;
const MediumBackground = ({ children }) => <div style={{ background: NASA_GREY, ...commonStyles }}>{children}</div>;

const restProps = {
    style: {
        margin: '1rem auto 1rem auto',
        display: 'block',
        maxWidth: '500px',
    }
};

storiesOf('Worm Logo', module)
    .addParameters({ component: WormLogo, componentSubtitle: "The NASA Logotype" })
    .add('Overview', () => <WormLogo {...restProps} />)
    .add('on white background', () => (
        <WhiteBackground>
            <WormLogo color={NASA_BLACK} {...restProps} />
            <WormLogo color={NASA_RED} {...restProps} />
        </WhiteBackground>))
    .add('on light background', () => (
        <LightBackground>
            <WormLogo color={NASA_BLACK} {...restProps} />
        </LightBackground>))
    .add('on dark background', () => (
        <DarkBackground>
            <WormLogo color={NASA_WHITE} {...restProps} />
        </DarkBackground>))
    .add('on medium background', () => (
        <MediumBackground>
            <WormLogo color={NASA_BLACK} {...restProps} />
            <WormLogo color={NASA_WHITE} {...restProps} />
        </MediumBackground>));
