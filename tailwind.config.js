const { abort } = require("process");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        full: "100%",
      },
      fontFamily: {
        fancy: ["Arbutus Slab", "serif"],
      },
    },
  },
};
