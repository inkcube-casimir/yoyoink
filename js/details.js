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
        : arrowDownIcon.setAttribute("src", `../icons/${arrowDownIconSrc}.svg`);
    });

    button.addEventListener("click", () => {
      if (!button.classList.contains("active")) {
        arrowDownIcon.setAttribute(
          "src",
          `../icons/${arrowDownIconSrc}_hv.svg`
        );
        button.classList.add("active");
        buttonStatus = 1;
        tab.querySelector(`#collapse-${button.dataset.toggle}`).classList.remove("collapse-hide");
      } else {
        arrowDownIcon.setAttribute("src", `../icons/${arrowDownIconSrc}.svg`);
        button.classList.remove("active");
        buttonStatus = 0;
        tab.querySelector(`#collapse-${button.dataset.toggle}`).classList.add("collapse-hide");
      }
    });
  }
}
