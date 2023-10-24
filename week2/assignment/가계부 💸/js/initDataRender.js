import {
  renderHistoryList,
} from "./utils/historyDataRender.js";

import { 
  renderAssetData,
} from "./utils/assetDataRender.js";

function render() {
  renderHistoryList();
  renderAssetData();
}

render();
