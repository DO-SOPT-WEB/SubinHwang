import {
  HISTORY_LIST,
} from "./utils/constants.js";

import {
  addList,
} from "./utils/elementCreator.js";

import {
  calculateMoney, 
  resetMoney, 
  setMoney 
} from "./utils/assetDataRender.js";

function setData() {
  resetMoney();
  HISTORY_LIST.forEach((history) => {
    addList(history);
    calculateMoney(history);
  });
  setMoney();
}

setData();
