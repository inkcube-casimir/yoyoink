const bestCat = document.querySelectorAll(".best-cat");

for (let i = 0; i < bestCat.length; i++) {
    const items = bestCat[i].querySelectorAll(".most-popular-items .item")

    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        const description = item.querySelector(".item-bottom .item-collapse-con button#popular-description");
        const viewComboDeals = item.querySelector(".item-bottom .item-collapse-con button#popular-view-combo-deals");
        const viewSinglePacks = item.querySelector(".item-bottom .item-collapse-con button#popular-view-single-packs");
        const collapseTrigger = [description, viewComboDeals, viewSinglePacks];

        for (let e = 0; e < collapseTrigger.length; e++) {
            const trigger = collapseTrigger[e];
            trigger.addEventListener("click", () => {
                const id = trigger.getAttribute("id");
                const collapseClassList = item.querySelector(`.item-bottom .item-collapse-con .${id}`).classList;

                if(collapseClassList.contains("collapse-show")) {
                    collapseClassList.replace("collapse-show", "collapse-hide");
                } else {
                    collapseClassList.replace("collapse-hide", "collapse-show");
                }
            })
        }
    }
}