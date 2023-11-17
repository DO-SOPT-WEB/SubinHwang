import { renderHistoryList } from "./js/History/HistoryView.js";
import { renderAssetData } from "./js/Asset/AssetView.js";
import { renderCategory } from "./js/Category/CategoryView.js";

function render() {
  renderHistoryList();
  renderAssetData();
  renderCategory();
}

render();
