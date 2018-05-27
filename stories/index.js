import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import NASA1975Story from "../lib/components/NASA1975/NASA1975.story.js";
import WormLogoStory from "../lib/components/WormLogo/WormLogo.story.js";
import LoaderStory from "../lib/components/Loader/Loader.story.js";
import HeadingStory from "../lib/components/Heading/Heading.story.js";
import AgencyNameStory from "../lib/components/AgencyName/AgencyName.story.js";
import LogoTypeStory from "../lib/components/LogoType/LogoType.story.js";
import StemLogoStory from "../lib/components/StemLogo/StemLogo.story.js";
import ArticleAuthorStory from "../lib/components/ArticleAuthor/ArticleAuthor.story.js";
import NewsReleaseStory from "../lib/components/NewsRelease/NewsRelease.story.js";

// Setup Components section
const componentStories = storiesOf("Components", module);
componentStories.addDecorator(withKnobs);

componentStories.add("WormLogo", () => <WormLogoStory />);
componentStories.add("NASA1975", () => <NASA1975Story />);
componentStories.add("Loader", () => <LoaderStory />);
componentStories.add("Heading", () => <HeadingStory />);
componentStories.add("AgencyName", () => <AgencyNameStory />);
componentStories.add("ArticleAuthor", () => <ArticleAuthorStory />);

// Setup Modules section
const modulesStories = storiesOf("Modules", module);
modulesStories.addDecorator(withKnobs);

modulesStories.add("LogoType", () => <LogoTypeStory />);
modulesStories.add("StemLogo", () => <StemLogoStory />);

// Setup Templates section
const templateStories = storiesOf("Templates", module);
templateStories.addDecorator(withKnobs);

templateStories.add("NewsRelease", () => <NewsReleaseStory />);
