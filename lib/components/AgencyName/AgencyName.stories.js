import React from "react";
import AgencyName from "./";

/**
 * Docs page configuration
 */
export default {
  title: 'Agency Name',
  component: AgencyName,
  parameters: {
    componentSubtitle: 'Agency and Center Identification',
  },
};

/**
 * Component stories
 */
export const overview = () => (
  <AgencyName centerName="John F. Kennedy Space Center" />
);

export const stacked = () => (
  <AgencyName stacked />
);

export const sizesWithOutCenterName = () => (
  <div>
    <AgencyName size="xl" style={{ marginBottom: "2rem" }} />
    <AgencyName size="lg" style={{ marginBottom: "2rem" }} />
    <AgencyName size="md" style={{ marginBottom: "2rem" }} />
    <AgencyName size="sm" style={{ marginBottom: "2rem" }} />
    <AgencyName size="xs" />
  </div>
);

export const sizesWithCenterName = () => (
  <div>
    <AgencyName size="xl" centerName="John F. Kennedy Space Center" style={{ marginBottom: "2rem" }} />
    <AgencyName size="lg" centerName="John F. Kennedy Space Center" style={{ marginBottom: "2rem" }} />
    <AgencyName size="md" centerName="John F. Kennedy Space Center" style={{ marginBottom: "2rem" }} />
    <AgencyName size="sm" centerName="John F. Kennedy Space Center" style={{ marginBottom: "2rem" }} />
    <AgencyName size="xs" centerName="John F. Kennedy Space Center" style={{ marginBottom: "2rem" }} />
  </div>
);
