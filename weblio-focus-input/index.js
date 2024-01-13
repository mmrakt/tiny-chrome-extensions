const INPUT_CLASS = ".formBoxITxt";
document.body.addEventListener("keydown", function (e) {
  if (e.key === "/") {
    document.querySelector(INPUT_CLASS)?.focus();
    e.preventDefault();
  }
});
