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
