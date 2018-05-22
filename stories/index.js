import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import WormLogoStory from "../lib/components/WormLogo/WormLogo.story.js";

const componentStories = storiesOf("Components", module);
componentStories.addDecorator(withKnobs);

componentStories.add("WormLogo", () => <WormLogoStory />);
