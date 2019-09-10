import React from "react";
import { NASA_RED, NASA_GREY, NASA_DARK, NASA_LIGHT } from "./";

/**
 * Docs page configuration
 */
export default {
  title: 'Colors',
  parameters: {
    componentSubtitle: 'Colours and stuff',
  },
};

/**
 * Component stories
 */
export const overview = () => (
  <div>
    <div style={{backgroundColor: NASA_RED, height: '200px', width: '200px'}}></div>
    <div style={{backgroundColor: NASA_DARK, height: '200px', width: '200px'}}></div>
    <div style={{backgroundColor: NASA_GREY, height: '200px', width: '200px'}}></div>
    <div style={{backgroundColor: NASA_LIGHT, height: '200px', width: '200px'}}></div>
  </div>
);
