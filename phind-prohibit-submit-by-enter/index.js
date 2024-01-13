(() => {
  "use strict";

  const app = document.querySelector(".searchbox-textarea");
  const useCapture = true;
  app.addEventListener(
    "keydown",
    (event) => {
      const pressedShiftEnter = event.shiftKey && event.key === "Enter";
      if (pressedShiftEnter) {
        return;
      }

      const pressedEnter =
        event.altKey === false &&
        event.ctrlKey === false &&
        event.key === "Enter";
      if (pressedEnter) {
        event.stopPropagation();
      }
    },
    useCapture
  );
})();
