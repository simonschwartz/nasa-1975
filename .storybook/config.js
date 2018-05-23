import { configure } from "@storybook/react";
import { setDefaults } from "@storybook/addon-info";

setDefaults({
  header: false,
  inline: true,
  styles: {
    infoBody: {
      border: "none",
      padding: "0px",
      borderTop: "1px solid rgb(238, 238, 238)",
      paddingTop: "20px",
      marginTop: "25px",
      boxShadow: "none"
    }
  }
});

function loadStories() {
  require("../stories");
}

configure(loadStories, module);
