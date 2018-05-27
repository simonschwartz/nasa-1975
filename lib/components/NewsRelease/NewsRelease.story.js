import React from "react";
import { text, array } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import NewsRelease from "./";

const NewsReleaseStory = withInfo({
  text:
    "News release publication template. Publications constitute the largest communications output from NASA."
})(() => {
  // Setup knob for author name text
  const labelAuthorName = "authorName";
  const defaultValueAuthorName = "John Smith";
  const authorNameValue = text(labelAuthorName, defaultValueAuthorName);

  // Setup knob for author location text
  const labelAuthorLocation = "authorLocation";
  const defaultValueAuthorLocation = "Goddard Space Flight Center";
  const authorLocationValue = text(
    labelAuthorLocation,
    defaultValueAuthorLocation
  );

  // Setup knob for author location text
  const labelAuthorPhone = "authorPhone";
  const defaultValueAuthorPhone = "301/725-1234";
  const authorPhoneValue = text(labelAuthorPhone, defaultValueAuthorPhone);

  // Setup knob for setting title text
  const labelTitle = "title";
  const defaultValueTitle = "Skylab puts out welcome mat for comet";
  const titleValue = text(labelTitle, defaultValueTitle);

  // Setup knob for center name text
  const labelCenterName = "centerName";
  const defaultValueCenterName = "Goddard space center";
  const centerNameValue = text(labelCenterName, defaultValueCenterName);

  // Setup knob for center address
  const labelCenterAddress = "centerAddress";
  const defaultValueCenterAddress = [
    "Washington. D.C. 20546 ",
    "AC 202 755-8370"
  ];
  const centerAddressValue = array(
    labelCenterAddress,
    defaultValueCenterAddress
  );

  return (
    <NewsRelease
      title={titleValue}
      authorName={authorNameValue}
      authorLocation={authorLocationValue}
      authorPhone={authorPhoneValue}
      centerName={centerNameValue}
      centerAddress={centerAddressValue}
      style={{ maxWidth: "700px", margin: "auto" }}
    >
      <div>
        <p>
          Space Station Skylabs final tenants will move into their orbiting home
          270 miles above the Earth on or about November 10 to Complete a
          harvest of scientific information about our home planet and our life
          giving star, the Sun. Two earlier threesomes of tenants occupied the
          space station for 28 and 59 days before "leaving the key under themat"
          for the final crew that will live aboard Skylab for up to two months.
        </p>
        <p>
          Earth resources, solar astronomy, medical and other experiments will
          fill the waking hours of the Skylab crewmen, with the opportunity to
          view the comet Kohoutek as an added bonus in December or January.
        </p>
        <p>
          Flying above the distorting layers of Earth atmosphere, Skylabs solar
          telescopes and astronomical cameras are expected to provide valuable
          data about the make-up of comets as well as continuing the
          surveillance of the flares, prominences and other dynamic events
          taking place on the face of the Sun. Not to mention the dynamic events
          taking place on Saturn, the Full Moon and Venus. But that, gentle
          reader, is a story too suggestive for this release.
        </p>
      </div>
    </NewsRelease>
  );
});

export default NewsReleaseStory;
