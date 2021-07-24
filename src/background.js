(async () => {
  const convertContentForEmbed = (content) =>
    `decodeURIComponent("${encodeURIComponent(content)}")`;
  browser.omnibox.onInputEntered.addListener(async (text, disposition) => {
    browser.tabs.executeScript({
      code:
        'new Function('
        + convertContentForEmbed((await browser.storage.sync.get('argument'))['argument'] ?? '')
        + ','
        + convertContentForEmbed((await browser.storage.sync.get('code'))['code'] ?? '')
        + ')'
        + `(${convertContentForEmbed(text)}, ${convertContentForEmbed(disposition)})`,
    });
  });
})();
