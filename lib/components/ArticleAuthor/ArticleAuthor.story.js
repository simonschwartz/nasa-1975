import React from "react";
import { text, select } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import ArticleAuthor from "./";

const ArticleAuthorStory = withInfo({
  text: "Display the author details for a news release"
})(() => {
  // Setup knob for setting author name text
  const labelName = "name";
  const defaultValueName = "John Smith";
  const nameValue = text(labelName, defaultValueName);

  // Setup knob for setting author location text
  const labelLocation = "location";
  const defaultValueLocation = "Goddard Space Flight Center";
  const locationValue = text(labelLocation, defaultValueLocation);

  // Setup knob for setting author phone text
  const labelPhone = "phone";
  const defaultValuePhone = "301/725-1234";
  const phoneValue = text(labelPhone, defaultValuePhone);

  return (
    <ArticleAuthor
      name={nameValue}
      location={locationValue}
      phone={phoneValue}
    />
  );
});

export default ArticleAuthorStory;
