/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { NASA_DARK } from '../Colours'

export const FONT_FAMILY_HELVETICA = `font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;`;
export const FONT_FAMILY_GARAMOND = `font-family: 'EB Garamond', serif;`;
export const FONT_FAMILY_DEFAULT = FONT_FAMILY_HELVETICA;
export const FONT_COLOR_DEFAULT = NASA_DARK;

const TypographyState = React.createContext({ fontFamily: FONT_FAMILY_DEFAULT });

export const TypographyTheme = ({ fontFamily, children }) => 
    <TypographyState.Provider value={{ fontFamily: fontFamily }}>
        { children }
    </TypographyState.Provider>

export const textStyle = ({ weight = "light", fontFamily = FONT_FAMILY_DEFAULT, color = FONT_COLOR_DEFAULT }) => {
    const fontWeight = weight === "light" ? "400" : "600";
    return css`
        ${fontFamily};
        font-size: 1rem;
        line-height: 1.618rem;
        margin: 0 0 1.5rem 0;
        font-weight: ${fontWeight};
        color: ${color};
    `
};

export const headingStyle = ({ size = "md", weight = "bold", fontFamily = FONT_FAMILY_DEFAULT, color = FONT_COLOR_DEFAULT }) => {

    const fontWeight = weight === "bold" ? "600" : "400";

    const fontSize = (size) => {
        switch(size) {
            case "sm": return 1.25;
            case "md": return 1.75;
            case "lg": return 2.5;
        }
    };

    const lineHeight = `${fontSize(size) * 1.42857}rem`;

    return css `
        ${fontFamily};
        line-height: ${lineHeight};
        margin: 0 0 1rem 0;
        font-weight: ${fontWeight};
        font-size: ${fontSize(size)}rem;
        color: ${color};
    `
};

export class Text extends React.Component {
    static contextType = TypographyState;

    render() {
        const { weight, children } = this.props
        const context = this.context;
        const fontFamily = this.props.fontFamily || context.fontFamily || FONT_FAMILY_DEFAULT
        return <p css={textStyle({ weight, fontFamily })}>{ children }</p>
    }
};

export class Heading extends React.Component {
    static contextType = TypographyState;

    render() {
        const { size, children, level, weight } = this.props;
        const context = this.context;
        const HeadingTag = `h${level}`;
        const fontFamily = this.props.fontFamily || context.fontFamily || FONT_FAMILY_DEFAULT
        return <HeadingTag css={headingStyle({ size, weight, fontFamily })}>{ children }</HeadingTag>
    }
};


// TODO - causes bug where font style will flash while asset is being fetched
// need to preload fonts somehow, maybe in TypographyTheme?
const setFontStylesheet = href => {
    const links = document.getElementsByTagName('link');
    const alreadyExists = Array.from(links).filter(link => link.href === href).length > 0;
    if(alreadyExists) return

    const link = document.createElement('link');
    const head = document.getElementsByTagName('head')[0];
    link.rel = 'stylesheet';
    link.href = href;
    // link.href = 'https://fonts.googleapis.com/css?family=EB+Garamond:600,700';
    head.appendChild(link);
};

