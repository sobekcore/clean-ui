/**
 * Clean UI
 * (c) 2021-2021 Sobek
 * sobekcore@gmail.com
 */

if (typeof document !== "undefined") {
  require("./clean-ui.css");

  /* Common functions START; */
  function hexToRGB(rgb) {
    let str = rgb.charAt(0) === "#" ? 1 : 0;
    let r = parseInt(rgb.substring(str, str + 2), 16);
    let g = parseInt(rgb.substring(str + 2, str + 4), 16);
    let b = parseInt(rgb.substring(str + 4, str + 6), 16);
    return `${r}, ${g}, ${b}`;
  }
  /* Common functions END; */

  const _Root = document.querySelector(":root");

  const _Buttons = {
    ClassicButton: (primary, secondary) => {
      if (primary !== undefined) {
        _Root.style.setProperty("--cui-classic-button-primary", primary);
      }
      if (secondary !== undefined) {
        _Root.style.setProperty("--cui-classic-button-secondary", secondary);
      }
    },
  };

  const _Helpers = {
    Tooltip: (color) => {
      if (color !== undefined) {
        _Root.style.setProperty("--cui-tooltip-color", `rgb(${hexToRGB(color)})`);
        _Root.style.setProperty("--cui-tooltip-color-opaque", `rgba(${hexToRGB(color)}, 0.15`);
      }

      let tooltips = document.querySelectorAll(".cui-tooltip");
      tooltips.forEach((tooltip) => {
        let tooltipContent = tooltip.innerHTML;
        tooltip.innerHTML = "";

        let tooltipIcon = document.createElement("div");
        tooltipIcon.className = "cui-tooltip-icon";
        tooltip.appendChild(tooltipIcon);

        let tooltipMaterialIcon = document.createElement("span");
        tooltipMaterialIcon.className = "cui-tooltip-material-icon material-icons-outlined";
        tooltipMaterialIcon.innerHTML = "info";
        tooltipIcon.appendChild(tooltipMaterialIcon);

        let tooltipText = document.createElement("p");
        tooltipText.className = "cui-tooltip-text";
        tooltipText.innerHTML = tooltipContent;
        tooltip.appendChild(tooltipText);
      });
    },
  };

  module.exports._Root = _Root;
  module.exports._Buttons = _Buttons;
  module.exports._Helpers = _Helpers;

  module.exports.CleanUI = {
    _Root,
    _Buttons,
    _Helpers,
  };
}
