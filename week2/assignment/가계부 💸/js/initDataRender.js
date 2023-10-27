import { renderHistoryList } from "./historyDataRender.js";
import { renderAssetData } from "./assetDataRender.js";
import { renderCategory } from "./categoryRender.js";

function render() {
  renderHistoryList();
  renderAssetData();
  renderCategory();
}

render();
