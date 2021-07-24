(async () => {
  const $argument = /** @type {HTMLInputElement} */ (document.getElementById('argument'));
  $argument.value = (await browser.storage.sync.get('argument'))['argument'] ?? '...args';
  $argument.addEventListener('change', async () => {
    await browser.storage.sync.set({ argument: $argument.value });
  });

  const $code = /** @type {HTMLTextAreaElement} */ (document.getElementById('code'));
  $code.value = (await browser.storage.sync.get('code'))['code'] ?? 'console.log(args);';
  $code.addEventListener('change', async () => {
    await browser.storage.sync.set({ code: $code.value });
  });
})();
