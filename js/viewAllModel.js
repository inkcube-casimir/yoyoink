const printerFamily = document.getElementsByClassName("printer-family");
const cardRow = printerFamily[0].getElementsByClassName("card-row");

for (let index = 0; index < cardRow.length; index++) {
  let collapseState = 0;
  let collapseCurrent = null;

  const card = cardRow[index].getElementsByClassName("card");

  for (let e = 0; e < card.length; e++) {
    const button = card[e].getElementsByTagName("button");
    const familySeries = button[0].dataset.familySeries;
    const collapse = cardRow[0].parentElement.querySelector(`#${familySeries}`);

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
