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

  function insertNodeBefore(anchor, item) {
    return anchor.parentNode.insertBefore(item, anchor.nextElementSibling);
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

  const _Pickers = {
    Percantage: (primary, secondary, hide = true) => {
      if (primary !== undefined) {
        _Root.style.setProperty("--cui-percantage-primary", primary);
      }
      if (secondary !== undefined) {
        _Root.style.setProperty("--cui-percantage-secondary", secondary);
      }

      let percantageInput = document.querySelectorAll(".cui-percantage-input");
      percantageInput.forEach((input) => {
        let percantageList = document.createElement("ul");
        percantageList.className = "cui-percantage-list";
        insertNodeBefore(input, percantageList);

        for (let i = 0; i <= 10; i++) {
          let percantageItem = document.createElement("li");
          percantageItem.className = "cui-percantage-item";
          percantageItem.innerHTML = 10 * i + "%";
          percantageList.appendChild(percantageItem);
        }

        window.addEventListener("click", function (e) {
          if (input.parentElement.contains(e.target)) {
            input.nextElementSibling.style.display = "block";
          } else {
            input.nextElementSibling.style.display = "none";
          }
        });
      });

      let percantageItem = document.querySelectorAll(".cui-percantage-item");
      percantageItem.forEach((item) => {
        item.addEventListener("click", function () {
          this.parentElement.previousElementSibling.value = this.innerHTML;
          if (hide === true) {
            setTimeout(() => {
              this.parentElement.style.display = "none";
            }, 1);
          }
        });
      });
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
  module.exports._Pickers = _Pickers;
  module.exports._Helpers = _Helpers;

  module.exports.CleanUI = {
    _Root,
    _Buttons,
    _Pickers,
    _Helpers,
  };
}
