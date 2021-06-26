/**
 * Clean UI
 * (c) 2021-2021 Sobek
 * sobekcore@gmail.com
 */

if (typeof document !== "undefined") {
  require("./clean-ui.css");
  const _Root = document.querySelector(":root");

  const _Buttons = {
    ClassicButton: (primary, secondary) => {
      let buttons = document.querySelectorAll(".cui-classic-button");

      buttons.forEach(() => {
        if (primary !== undefined) {
          _Root.style.setProperty("--cui-classic-button-primary", primary);
        }
        if (secondary !== undefined) {
          _Root.style.setProperty("--cui-classic-button-secondary", secondary);
        }
      });
    },
  };

  module.exports._Root = _Root;
  module.exports._Buttons = _Buttons;

  module.exports.CleanUI = {
    _Root,
    _Buttons,
  };
}
