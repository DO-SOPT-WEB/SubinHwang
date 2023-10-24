import { renderAssetData } from "./assetDataRender.js";
import { ELEMENT, HISTORY_LIST } from "./constants.js";

function removeList(index, list) {
  HISTORY_LIST.forEach((history, i) => {
    if (index === history[0]) {
      HISTORY_LIST.splice(i, 1);
      list.remove();
    }
  });
}
export function setDeleteEvent() {
  const deleteButtons = document.querySelectorAll("button.delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const indexToDelete = parseInt(event.target.getAttribute(ELEMENT.ATTRIBUTE.DATA_INDEX));
      const listToDelete = event.target.parentElement;
      removeList(indexToDelete, listToDelete);
      renderAssetData();
    });
  });
}

