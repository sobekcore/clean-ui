/**
 * Clean UI
 * (c) 2021-2021 Sobek
 * sobekcore@gmail.com
 */

if (typeof document !== "undefined") {
  require("./clean-ui.css");

  /* Enums START; */
  const CUI_STANDARD_COLOR = "var(--cui-standard-color)";
  const CUI_GRAY_COLOR = "var(--cui-gray-color)";
  /* Enums END; */

  /* Common functions START; */
  function hexToRGB(rgb) {
    let str = rgb.charAt(0) === "#" ? 1 : 0;
    let r = parseInt(rgb.substring(str, str + 2), 16);
    let g = parseInt(rgb.substring(str + 2, str + 4), 16);
    let b = parseInt(rgb.substring(str + 4, str + 6), 16);
    return `${r}, ${g}, ${b}`;
  }

  function insertNodeBefore(anchor, item) {
    return anchor.parentNode.insertBefore(item, anchor);
  }

  function insertNodeAfter(anchor, item) {
    return anchor.parentNode.insertBefore(item, anchor.nextElementSibling);
  }

  function wrapNodes(element, className, items) {
    items.forEach((item) => {
      let itemWrapper = document.createElement(element);
      itemWrapper.className = className;
      insertNodeAfter(item, itemWrapper);
      itemWrapper.appendChild(item);
    });
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
      wrapNodes("div", "cui-percantage", percantageInput);
      percantageInput.forEach((input) => {
        let percantageList = document.createElement("ul");
        percantageList.className = "cui-percantage-list";
        insertNodeAfter(input, percantageList);

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

  const _Systemic = {
    Toggle: (primary = CUI_STANDARD_COLOR, secondary = CUI_GRAY_COLOR, switcher, borderRadius) => {
      _Root.style.setProperty("--cui-toggle-secondary", secondary);
      if (switcher !== undefined) {
        _Root.style.setProperty("--cui-toggle-switch", switcher);
      }
      if (borderRadius !== undefined) {
        _Root.style.setProperty("--cui-toggle-border-radius", borderRadius);
      }

      let toggleInput = document.querySelectorAll(".cui-toggle-input");
      wrapNodes("div", "cui-toggle", toggleInput);
      toggleInput.forEach((input) => {
        input.setAttribute("type", "checkbox");

        let toggleCover = document.createElement("div");
        toggleCover.className = "cui-toggle-cover";
        insertNodeBefore(input, toggleCover);

        let toggleSwitch = document.createElement("div");
        toggleSwitch.className = "cui-toggle-switch";
        toggleCover.appendChild(toggleSwitch);

        input.addEventListener("click", function () {
          let cover = input.previousElementSibling;
          if (input.checked) {
            cover.querySelector(".cui-toggle-switch").style.marginLeft = "28px";
            cover.style.borderColor = primary;
            cover.style.background = primary;
          } else {
            cover.querySelector(".cui-toggle-switch").style.marginLeft = "0px";
            cover.style.borderColor = secondary;
            cover.style.background = secondary;
          }
        });
      });
    },
  };

  module.exports._Root = _Root;
  module.exports._Buttons = _Buttons;
  module.exports._Pickers = _Pickers;
  module.exports._Helpers = _Helpers;
  module.exports._Systemic = _Systemic;

  module.exports.CleanUI = {
    _Root,
    _Buttons,
    _Pickers,
    _Helpers,
    _Systemic,
  };
}
