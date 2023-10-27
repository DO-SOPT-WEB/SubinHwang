import { renderAssetData } from "../Asset/AssetView.js";
import { ELEMENT, HISTORY_LIST } from "../utils/constants.js";
import {
  BACKGROUND_OF_MODAL,
  CANCEL_BUTTON,
  CONFIRM_BUTTON,
  MODAL_DELETE,
} from "../utils/documentElements.js";

let indexToDelete;
let listToDelete;
let isConfirmed = false;

function findIndexToDelete() {
  return HISTORY_LIST.findIndex((history) => indexToDelete === history[0]);
}

function deleteList() {
  const index = findIndexToDelete();
  if (index !== -1) {
    HISTORY_LIST.splice(index, 1);
    listToDelete.remove();
    renderAssetData();
  }
}

function handleConfirmClick() {
  isConfirmed = true;
  deleteList();
  closeModal();
}

function handleCancelClick() {
  isConfirmed = false;
  closeModal();
}

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

  CONFIRM_BUTTON.addEventListener("click", handleConfirmClick);
  CANCEL_BUTTON.addEventListener("click", handleCancelClick);
}
