import { renderAssetData } from "./assetDataRender.js";
import {
  BACKGROUND_OF_MODAL,
  CANCEL_BUTTON,
  CONFIRM_BUTTON,
  ELEMENT,
  HISTORY_LIST,
  MODAL_DELETE,
} from "./constants.js";

let indexToDelete;
let listToDelete;
let isConfirmed = false;

function deleteList(index, list) {
  HISTORY_LIST.forEach((history, i) => {
    if (index === history[0]) {
      HISTORY_LIST.splice(i, 1);
      list.remove();
    }
  });
  renderAssetData();
}

CONFIRM_BUTTON.addEventListener("click", () => {
  isConfirmed = true;
  deleteList(indexToDelete, listToDelete);
  closeModal();
});
CANCEL_BUTTON.addEventListener("click", () => {
  isConfirmed = false;
  closeModal();
});

function openModal() {
  MODAL_DELETE.style.display = "flex";
  BACKGROUND_OF_MODAL.style.display = "block";
}

function closeModal() {
  MODAL_DELETE.style.display = "none";
  BACKGROUND_OF_MODAL.style.display = "none";
}

export function setDeleteEvent() {
  const deleteButtons = document.querySelectorAll("button.delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      indexToDelete = parseInt(
        event.target.getAttribute(ELEMENT.ATTRIBUTE.DATA_INDEX)
      );
      listToDelete = event.target.parentElement;
      openModal();
    });
  });
}
