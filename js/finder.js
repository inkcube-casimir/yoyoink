const printerSeriesForm = document.querySelector(
  ".finder-form-series"
);

const printerSeriesInputLabel = printerSeriesForm.querySelectorAll(
  ".finder-form-input-wrapper p"
);

const carNumForm = document.querySelector(
  ".finder-form-car-num"
);

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
    const formNeededToBeDisabled = input.parentElement.parentElement.parentElement.classList.value ==="finder-form-series" ? carNumForm : printerSeriesForm;
    if (input.value) {
      formNeededToBeDisabled.querySelector('input').setAttribute("disabled", "disabled");
      enableInput(inputIndex + 1, type);
    } else {
      inputIndex === 1 ? null : formNeededToBeDisabled.querySelector('input').removeAttribute("disabled");
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
