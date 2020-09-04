function init() {
  //header.js
  function removeDropdownShow() {
    dropdown.classList.contains("show")
      ? dropdown.classList.remove("show")
      : null;
  }

  const bottomHeader = document.querySelector(".page-header .bottom-header");
  const bottomHeaderLinks = bottomHeader.querySelectorAll(".link a");
  const otherBtn = bottomHeader.querySelector("nav button");
  const dropdown = bottomHeader.querySelector("nav .dropdown");
  const searchField = bottomHeader.querySelector("label");
  const searchFieldInput = searchField.querySelector("input");
  const searchFieldPlaceholderText = searchField.querySelector(
    ".placeholder p"
  );

  //bottom header links
  for (let i = 0; i < bottomHeaderLinks.length; i++) {
    const link = bottomHeaderLinks[i];
    link.addEventListener("mouseover", () => {
      removeDropdownShow();

      link.parentElement.style.borderBottom = "2px solid #e55c61";
    });
    link.addEventListener("mouseleave", () => {
      link.parentElement.style.borderBottom = "";
    });
  }

  //other
  otherBtn.addEventListener("mouseover", () => {
    dropdown.classList.add("show");
  });
  bottomHeader.addEventListener("mouseleave", () => {
    removeDropdownShow();
  });
  searchFieldInput.addEventListener("mouseover", () => {
    removeDropdownShow();
  });

  //search field
  searchFieldInput.addEventListener("focus", () => {
    searchFieldPlaceholderText.classList.add("hide");
  });
  searchFieldInput.addEventListener("focusout", () => {
    searchFieldPlaceholderText.classList.remove("hide");
  });

  //finder.js
  const printerSeriesForm = document.querySelector(".finder-form-series");

  const printerSeriesInputLabel = printerSeriesForm.querySelectorAll(
    ".finder-form-input-wrapper p"
  );

  const carNumForm = document.querySelector(".finder-form-car-num");

  const carNumInputLabel = carNumForm.querySelectorAll(
    ".finder-form-input-wrapper p"
  );

  function bindEvents(label, input, inputIndex, type) {
    input.addEventListener("focus", () => {
      label.style.display = "none";
    });

    input.addEventListener("focusout", () => {
      if (!input.value) label.style.display = "block";
    });

    input.addEventListener("change", () => {
      const formNeededToBeDisabled =
        input.parentElement.parentElement.parentElement.classList.value ===
        "finder-form-series"
          ? carNumForm
          : printerSeriesForm;
      if (input.value) {
        formNeededToBeDisabled
          .querySelector("input")
          .setAttribute("disabled", "disabled");
        enableInput(inputIndex + 1, type);
      } else {
        inputIndex === 1
          ? null
          : formNeededToBeDisabled
              .querySelector("input")
              .removeAttribute("disabled");
        disableInput(inputIndex + 1, type);
      }
    });
  }

  function enableInput(i, type) {
    if (type[i]) {
      let label = type[i];
      let input = label.previousElementSibling;
      input.removeAttribute("disabled");

      bindEvents(label, input, i, type);
    }
  }

  function disableInput(i, type) {
    if (type[i]) {
      let label = type[i];
      let input = label.previousElementSibling;
      input.setAttribute("disabled", "disabled");
      input.value = "";
      label.style.display = "block";
    }
  }

  enableInput(0, printerSeriesInputLabel);
  enableInput(0, carNumInputLabel);

  //viewAllModel.js
  const printerFamily = document.getElementsByClassName("printer-family");
  const cardRow = printerFamily[0].getElementsByClassName("card-row");

  for (let index = 0; index < cardRow.length; index++) {
    let collapseState = 0;
    let collapseCurrent = null;

    const card = cardRow[index].getElementsByClassName("card");

    for (let e = 0; e < card.length; e++) {
      const button = card[e].getElementsByTagName("button");
      const familySeries = button[0].dataset.familySeries;
      const collapse = cardRow[0].parentElement.querySelector(
        `#${familySeries}`
      );

      button[0].addEventListener("click", () => {
        const collapseClassList = collapse.classList;

        if (collapseCurrent === collapse) {
          collapseClassList.replace("collapse-show", "collapse-hide");
          collapseCurrent = null;
        } else {
          if (!collapseCurrent) {
            collapseClassList.replace("collapse-hide", "collapse-show");
            collapseCurrent = collapse;
          } else {
            collapseCurrent.classList.replace("collapse-show", "collapse-hide");
            collapseClassList.replace("collapse-hide", "collapse-show");
            collapseCurrent = collapse;
          }
        }
      });
    }
  }

  //popularItems.js
  const bestCat = document.querySelectorAll(".best-cat");

  for (let i = 0; i < bestCat.length; i++) {
    const items = bestCat[i].querySelectorAll(".most-popular-items .item");

    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      const description = item.querySelector(
        ".item-bottom .item-collapse-con button#popular-description"
      );
      const viewComboDeals = item.querySelector(
        ".item-bottom .item-collapse-con button#popular-view-combo-deals"
      );
      const viewSinglePacks = item.querySelector(
        ".item-bottom .item-collapse-con button#popular-view-single-packs"
      );
      const collapseTrigger = [description, viewComboDeals, viewSinglePacks];

      for (let e = 0; e < collapseTrigger.length; e++) {
        const trigger = collapseTrigger[e];

        if (trigger) {
          trigger.addEventListener("click", () => {
            const id = trigger.getAttribute("id");
            const collapseClassList = item.querySelector(
              `.item-bottom .item-collapse-con .${id}`
            ).classList;

            if (collapseClassList.contains("collapse-show")) {
              collapseClassList.replace("collapse-show", "collapse-hide");
            } else {
              collapseClassList.replace("collapse-hide", "collapse-show");
            }
          });
        }
      }
    }
  }

  //detailsNav.js
  function setButtonActive(img, src) {
    img.setAttribute("src", `../icons/${src}_hv.svg`);
  }

  function setButtonNotActive(img, src) {
    img.setAttribute("src", `../icons/${src}.svg`);
  }

  function isCurrentActiveButton(button) {
    let result;
    currentActiveButton == button ? (result = true) : (result = false);
    return result;
  }

  const details = document.querySelector(".details");
  const detailsNavButton = details.querySelectorAll(".details-nav button");
  let currentActiveButton;
  let currentActiveDetail;

  for (let i = 0; i < detailsNavButton.length; i++) {
    const button = detailsNavButton[i];
    const buttonImg = button.children[0];
    const buttonImgSrc = buttonImg.dataset.src;
    const buttonDetail = details.querySelector(`.${button.dataset.buttonType}`);

    if (button.classList.contains("active")) {
      currentActiveButton = button;
      currentActiveDetail = buttonDetail;
    }

    button.addEventListener("mouseenter", () =>
      setButtonActive(buttonImg, buttonImgSrc)
    );
    button.addEventListener("mouseleave", () =>
      isCurrentActiveButton(button)
        ? null
        : setButtonNotActive(buttonImg, buttonImgSrc)
    );
    button.addEventListener("click", () => {
      currentActiveButton.classList.remove("active");
      currentActiveDetail.classList.remove("active");

      setButtonNotActive(
        currentActiveButton.children[0],
        currentActiveButton.children[0].dataset.src
      );
      currentActiveDetail.style.display = "none";

      button.classList.add("active");
      buttonDetail.classList.add("active");
      setButtonActive(buttonImg, buttonImgSrc);
      buttonDetail.style.display = "flex";
      currentActiveButton = button;
      currentActiveDetail = buttonDetail;
    });
  }

  //details.js
  const detailsTabs = document.querySelectorAll(".details .details-tab");

  for (let i = 0; i < detailsTabs.length; i++) {
    const tab = detailsTabs[i];
    const buttons = tab.querySelectorAll(".details-tab-toggle");

    for (let index = 0; index < buttons.length; index++) {
      const button = buttons[index];
      let buttonStatus = 0;
      let arrowDownIcon = button.children[1];
      const arrowDownIconSrc = arrowDownIcon.dataset.src;

      button.addEventListener("mouseenter", () => {
        buttonStatus
          ? null
          : arrowDownIcon.setAttribute(
              "src",
              `../icons/${arrowDownIconSrc}_hv.svg`
            );
      });

      button.addEventListener("mouseleave", () => {
        buttonStatus
          ? null
          : arrowDownIcon.setAttribute(
              "src",
              `../icons/${arrowDownIconSrc}.svg`
            );
      });

      button.addEventListener("click", () => {
        if (!button.classList.contains("active")) {
          arrowDownIcon.setAttribute(
            "src",
            `../icons/${arrowDownIconSrc}_hv.svg`
          );
          button.classList.add("active");
          buttonStatus = 1;
          tab
            .querySelector(`#collapse-${button.dataset.toggle}`)
            .classList.remove("collapse-hide");
        } else {
          arrowDownIcon.setAttribute("src", `../icons/${arrowDownIconSrc}.svg`);
          button.classList.remove("active");
          buttonStatus = 0;
          tab
            .querySelector(`#collapse-${button.dataset.toggle}`)
            .classList.add("collapse-hide");
        }
      });
    }
  }
}

init();
