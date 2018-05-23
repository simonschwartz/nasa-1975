import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import NASA1975Story from "../lib/components/NASA1975/NASA1975.story.js";
import WormLogoStory from "../lib/components/WormLogo/WormLogo.story.js";
import LoaderStory from "../lib/components/Loader/Loader.story.js";
import HeadingStory from "../lib/components/Heading/Heading.story.js";

const componentStories = storiesOf("Components", module);
componentStories.addDecorator(withKnobs);

componentStories.add("WormLogo", () => <WormLogoStory />);
componentStories.add("NASA1975", () => <NASA1975Story />);
componentStories.add("Loader", () => <LoaderStory />);
componentStories.add("Heading", () => <HeadingStory />);
