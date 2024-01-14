document.body.addEventListener("keydown", function (e) {
  if (e.key === "/") {
    document.querySelector(".formBoxITxt")?.focus();
    e.preventDefault();
  }

  if ((e.metaKey || e.ctrlKey) && e.key === "k") {
    var targetElement = document.querySelector(".contentTopAudioIcon");
    if (targetElement) {
      targetElement.click();
    }
    e.preventDefault();
  }
});
