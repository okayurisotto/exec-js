module.exports = {
  sourceDir: "src",
  artifactsDir: "dist",
  run: {
    firefox: "/Applications/Firefox Developer Edition.app/Contents/MacOS/firefox-bin",
    startUrl: [
      "about:debugging#/runtime/this-firefox",
      "about:addons",
    ]
  },
};
